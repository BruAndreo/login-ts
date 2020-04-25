import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepo from '../repositorys/UserRepo';

class Users {

  public async listUsers(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    return res.json({ users: await users.find() });
  }

}

export default Users;
