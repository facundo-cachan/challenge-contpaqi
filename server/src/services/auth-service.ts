import { jwtSign, jwtDecode } from "@util/jwt-util";

import type { JwtPayload } from "jsonwebtoken";

const me = async (token: string) => await jwtDecode(token);
const sign = async (data: JwtPayload) => jwtSign(data);

export default { me, sign } as const;
