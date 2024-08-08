/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from "express";
import StatusCodes from "http-status-codes";

import authRouter from "./auth-router";

const apiRouter = Router();
const { OK }: { OK: number } = StatusCodes;

// Add api routes
/* 
apiRouter.use("/", (req: Request, res: Response) => {
  console.log(req.body)
  return res.status(OK).json({ message: 'APIs' })
})
 */

apiRouter.use("/auth", authRouter);

export default apiRouter;
