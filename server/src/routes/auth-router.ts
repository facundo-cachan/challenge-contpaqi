// TODO: Implement the oaut => https://github.com/node-/express-oauth-server

import { Router } from "express"
// import authService from "@services/auth-service"
import { ParamMissingError } from "@shared/errors"
import StatusCodes from "http-status-codes"

import type { Request, Response } from "express"

// Constants
const router = Router()
const { OK } = StatusCodes
const tokenSession = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkZhY3VuZG8iLCJyb2xlIjoiYWRtaW4iLCJnaXRodWJJRCI6IjI5Njk2MjQzIiwiaWF0IjoyMDE2MjM5MDIyfQ.CVcDPNlFzmagx1vGwvMxMovhFE0YOiesOvF8CSY1m40'

// Paths
export const p = {
  signIn: "/signIn",
  login: "/login",
  logout: "/logout",
} as const

// Cookie Properties
export const cookieProps = Object.freeze({
  key: "ExpressGeneratorTs",
  secret: process.env.COOKIE_SECRET,
  options: {
    httpOnly: true,
    signed: true,
    path: process.env.COOKIE_PATH,
    maxAge: Number(process.env.COOKIE_EXP),
    domain: process.env.COOKIE_DOMAIN,
    secure: process.env.SECURE_COOKIE === "true",
  },
})

/**
 * Login a user.
 */
router
  .post(p.login, (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log({ email, password });

    if (!email || !password) {
      return res.status(OK).json({
        error: new ParamMissingError().message,
      })
    }
    if (email === 'yo@facundo-cachan.dev' && password === '1q2w3e4r') {
      // const user = authService.login(email, password);
      return res.status(OK).json({ token: tokenSession, message: 'Welcome', redirectTo: '/dashboard' }).end()
    }

    return res.status(OK).json({
      message: 'Bad credentials'
    }).end()
  })
  .post(p.logout, (req: Request, res: Response) => {
    const { token } = req.body;
    // const user = authService.logout(token);
    if (token === tokenSession) {
      return res.status(OK).json({ message: 'Good Bye', redirectTo: '/'}).end()
    }
    return res.status(OK).json({ message: 'Bad token' }).end()
  })

// Export router
export default router
