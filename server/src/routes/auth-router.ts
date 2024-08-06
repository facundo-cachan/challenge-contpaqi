import { Router } from "express"
import authService from "@services/auth-service"
import { ParamMissingError } from "@shared/errors"
import StatusCodes from "http-status-codes"
import logger from "jet-logger";

import type { Request, Response } from "express"

// Constants
const router = Router()
const { OK } = StatusCodes

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
  .get(p.logout, (_: Request, res: Response) => {
    const { key, options } = cookieProps
    res.clearCookie(key, options)
    return res.status(OK).end()
  })
  .post(p.signIn, (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log({ email, password });
    if (!email || !password) {
      return res.status(OK).json({
        error: new ParamMissingError().message,
      })
    }
    if (email === 'yo@facundo-cachan.dev' && password === '1q2w3e4r') {
      // const user = authService.login(email, password);
      const user = {
        name: 'Facundo',
        role: 'admin',
        picture: 'https://avatars.githubusercontent.com/u/12345678?v=4'
      }
      return res.status(OK).json({ user }).end()
    }

    return res.status(OK).json({
      message: 'Bad credentials'
    }).end()
  })

// Export router
export default router
