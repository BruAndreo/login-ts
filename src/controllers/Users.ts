import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import Utils from '../lib/Utils';
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
      password: Utils.crypt(req.body.password),
      type: req.body.type,
    });

    await users.save(newUser);

    return res.status(201).json({ user: newUser });
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    const user = await users.findOne(req.params.id);

    return res.json({
      user: {
        name: user?.name,
        email: user?.email,
        type: user?.type,
        createdAt: user?.createdAt,
        updatedAt: user?.updatedAt,
        lastlogin: user?.lastLogin,
      }
    });
  }

  public async modifyUserType(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    const id = req.params.id;
    const newType = Number.parseInt(req.body.type);

    const userUpdated = await users.update(id, {type: newType});

    if (userUpdated.affected) {
      return res.json({ message: 'Update success' });
    }

    return res.status(500).json({ message: 'Error' });
  }

  public async modifyUserPassword(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    const id = req.params.id;
    const newPass = req.body.password;

    const userUpdated = await users.update(id, {password: Utils.crypt(newPass)});

    if (userUpdated.affected) {
      return res.json({ message: 'Update success' });
    }

    return res.status(500).json({ message: 'Error' });
  }

  public async deleteUser(req: Request, res: Response): Promise<Response> {
    const users = getCustomRepository(UserRepo);

    const id = req.params.id;

    await users.delete(id);

    return res.json({ message: 'User deleted' });
  }

}

export default Users;
