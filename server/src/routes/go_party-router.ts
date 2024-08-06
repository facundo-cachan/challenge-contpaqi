/*
  eslint-disable
    @typescript-eslint/require-await,
    @typescript-eslint/no-misused-promises,
    no-console
*/
import { Request, Response, Router } from "express";
import StatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";

import { authenticateToken } from "./jsonwebtoken";

const router = Router();
const { OK } = StatusCodes;
export const SECRET = 'secretToken';

// routes
export const routes: any = {
  sign: {
    signIn: {
      path: '/sign/v1/signIn',
      data: require("@repos/go_party/signIn.json"),
    },
  },
  events: {
    path: '/events/v1/',
    data: require("@repos/go_party/events.json"),
  },
  event: {
    path: '/events/v1/:eventId',
    data: require("@repos/go_party/event.json"),
  },
  friends: {
    path: '/friends/v1/:eventId',
    data: require("@repos/go_party/friends.json"),
  },
  account_friends: {
    path: '/account/v1/friends/:userId',
    data: require("@repos/go_party/friends.json"),
  },
} as const;
console.clear();
router.use((_req: Request, _res: Response, next) => {
  console.log('Go Party routes');
  // const { body, params } = req;
  // console.log({ body, params });
  next();
});

router.post(routes.sign.signIn.path, (req: Request, res: Response) => {
  const { body: { userId, userPass } } = req;
  console.log({ userId, userPass });
  if (userId === 'yo@facundo-cachan.dev' && userPass === '1q2w3e') {
    const token = jwt.sign(routes.sign.signIn.data, SECRET);
    // console.log('sign token', token);
    return res.status(OK).json({
      data: token, user: {
        userId: 31,
        userName: 'Facundo'
      }
    });
  }
  return res.status(OK).json({ data: {} });
});
router.get(routes.events.path, (_: Request, res: Response) => {
  return res.status(OK).json({ data: routes.events.data });
});
router.get(routes.event.path, authenticateToken, (req: Request, res: Response) => {
  const { params: { auth } } = req;
  if (auth) {
    const data = {
      ...routes.event.data,
      friends: routes.friends.data
    };
    return res.status(OK).json({
      data,
      user: JSON.parse(auth)
    });
  }
  return res.status(OK).json({ data: routes.event.data });
});
router.get(routes.account_friends.path, authenticateToken, (req: Request, res: Response) => {
  const { params: { auth } } = req;
  if (auth) {
    return res.status(OK).json({
      data: routes.account_friends.data
    });
  }
  return res.status(OK).json({ data: [] });
});

export default router;
