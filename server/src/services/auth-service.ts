import bcrypt from "bcrypt";

import userRepo from "@repos/user-repo";
import jwtUtil from "@util/jwt-util";
import { UnauthorizedError } from "@shared/errors";

/**
 * Login()
 *
 * @param email
 * @param password
 * @returns
 */

async function me(token: string | null) {
  // decrypt token
  if (!token) {
    return null
  }
  return { name: 'Facundo', role: 'admin', picture: 'https://avatars.githubusercontent.com/u/29696243?v=4' };
}

async function login(email: string, password: string): Promise<string> {
  if (email && password) {
    // Fetch user
    const user = await userRepo.getOne(email);
    if (!user) {
      throw new UnauthorizedError();
    }
    // Check password
    const pwdPassed = await bcrypt.compare(password, user.pwdHash);
    if (!pwdPassed) {
      throw new UnauthorizedError();
    }
    // Setup Admin Cookie
    return jwtUtil.sign({
      id: user.id,
      email: user.name,
      name: user.name,
      role: user.role,
    });
  }
  return "";
}

// Export default
export default {
  me,
  login,
} as const;
