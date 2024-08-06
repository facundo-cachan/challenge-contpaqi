import { IUser } from "@models/user-model";
import { UserCanBeDeleted } from "@shared/errors";
import { getRandomInt } from "@shared/functions";
import orm from "./mock-orm";

/**
 * Get one user.
 *
 * @param email
 * @returns
 */
async function getOne(email: string): Promise<IUser | null> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.email === email) {
      return user as IUser;
    }
  }
  return null;
}

/**
 * See if a user with the given id exists.
 *
 * @param id
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 *
 * @returns
 */
async function getAll(): Promise<IUser[]> {
  const db = await orm.openDb();
  return db.users as IUser[];
}

/**
 * Add one user.
 *
 * @param user
 * @returns
 */
async function add(user: IUser): Promise<void> {
  const db = await orm.openDb();
  user.id = getRandomInt();
  // user.role = user.role ? Number(user.role) : 0;
  db.users.push(user);
  return orm.saveDb(db);
}

/**
 * Update a user.
 *
 * @param user
 * @returns
 */
async function update(user: IUser): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === user.id) {
      db.users[i] = user;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 *
 * @param id
 * @returns
 */
async function deleteOne(id: number): Promise<void> {
  const db = await orm.openDb();
  const user = db.users.find((user: any) => user.id === id);
  if (user.role != 3107) {
    throw new UserCanBeDeleted();
  } else {
    for (let i = 0; i < db.users.length; i++) {
      if (db.users[i].id === id) {
        db.users.splice(i, 1);
        return orm.saveDb(db);
      }
    }
  }
}

// Export default
export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: deleteOne,
} as const;
