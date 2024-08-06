/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from "express"
import StatusCodes from "http-status-codes"

import { authMw } from "./middleware"

import authRouter from "./auth-router"
import chatRouter from "./chat-router"
import goPartyRouter from "./go_party-router"
import simpleRouter from './simple-router'
import userRouter from "./user-router"

// import type { Request, Response } from "express"

// Init
const apiRouter = Router()
const { OK } : { OK: number } = StatusCodes

// Add api routes
/* 
apiRouter.use("/", (req: Request, res: Response) => {
  console.log(req.body)
  return res.status(OK).json({ message: 'APIs' })
})
 */
apiRouter.use("/login", simpleRouter)
apiRouter.use("/auth", authRouter)

apiRouter.use("/go_party", goPartyRouter)

apiRouter.use("/users", authMw, userRouter)
apiRouter.use("/chat", authMw, chatRouter)

// Export default
export default apiRouter
