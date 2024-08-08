import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import http from "http";
import StatusCodes from "http-status-codes";
import morgan from "morgan";

import { cookieProps } from "@routes/auth-router";
import { CustomError } from "@shared/errors";
import logger from "jet-logger";
import BaseRouter from "./routes/api";

import "express-async-errors";

const app = express();

const allowedOrigins = ["http://localhost:3000"];
const options: cors.CorsOptions = {
  credentials: true,
  origin: allowedOrigins,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(cookieProps.secret));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// Add APIs
app.use("/api", cors(options), BaseRouter);

// Error handling
app.use(
  (err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST;
    return res.status(status).json({
      error: err.message,
    });
  },
);

const server = http.createServer(app);

export default server;
