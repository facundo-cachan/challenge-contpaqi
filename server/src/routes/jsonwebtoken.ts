import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

import { SECRET } from './go_party-router';

/**
 * Middleware to verify if user is an admin.
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token) {
    jwt.verify(token, SECRET as string, (_: any, success) => {
      if (success) {
        req.params = { auth: JSON.stringify(success) };
      }
    })
  }
  next()
}

