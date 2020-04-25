import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepo from '../repositorys/UserRepo';

class Users {

  public async listUsers(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    return res.json({ users: await users.find() });
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    const newUser = users.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      type: req.body.type,
    });

    await users.save(newUser);

    return res.status(201).json({ user: newUser });
  }

}

export default Users;
