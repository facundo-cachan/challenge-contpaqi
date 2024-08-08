// TODO: Implement the oaut => https://github.com/oauthjs/express-oauth-server

import { Router } from "express";
import { ParamMissingError } from "@shared/errors";
import StatusCodes from "http-status-codes";
import authService from "@services/auth-service";
import { user } from "src/constants/user";

import type { Request, Response } from "express";

// Constants
const router = Router();
const { OK } = StatusCodes;

// Paths
export const p = {
  me: "/me",
  favorites: "/me/favorites",
  signIn: "/signIn",
  login: "/login",
  logout: "/logout",
} as const;

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
});

/**
 * Login a user.
 */
router
  .get(p.me, async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(OK).json({
        error: new ParamMissingError().message,
      });
    }
    // authService.me(authorization);
    return res.status(OK).json(user).end();
  })
  .get(p.favorites, (_: Request, res: Response) => {
    // const user = authService.me(req);
    return res
      .status(OK)
      .json([
        {
          id: 533535,
          title: "Deadpool & Wolverine",
        },
        {
          id: 1309923,
          title: "Non Negotiable",
        },
        {
          id: 748783,
          title: "The Garfield Movie",
        },
      ])
      .end();
  })
  .post(p.login, async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(OK).json({
        error: new ParamMissingError().message,
      });
    }

    // Check if exist in db
    if (email && password) {
      const token = await authService.sign({ email, password });
      return res
        .status(OK)
        .json({
          user,
          token,
          message: "Welcome",
          redirectTo: "/dashboard",
        })
        .end();
    }

    return res
      .status(OK)
      .json({
        message: "Bad credentials",
      })
      .end();
  })
  .post(p.logout, (req: Request, res: Response) => {
    const { token } = req.body;
    // const user = authService.logout(token);
    if (token) {
      return res
        .status(OK)
        .json({ message: "Good Bye", redirectTo: "/" })
        .end();
    }
    return res.status(OK).json({ message: "Bad token" }).end();
  });

// Export router
export default router;
