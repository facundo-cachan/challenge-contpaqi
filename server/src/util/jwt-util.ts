import jsonwebtoken from "jsonwebtoken";

import type { VerifyOptions, JwtPayload } from "jsonwebtoken";

const secret = process.env.JWT_SECRET as string,
  options = { expiresIn: process.env.COOKIE_EXP } as VerifyOptions;

export const jwtSign = async (data: JwtPayload): Promise<string> =>
  jsonwebtoken.sign(data, secret);

export const jwtDecode = async (token: string) =>
  jsonwebtoken.verify(
    token,
    secret,
    options,
    async (_, decoded) => decoded ?? null,
  );
