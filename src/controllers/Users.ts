import { Request, Response } from 'express';

class Users {

  public async listUsers(req: Request, res: Response): Promise<Response> {
    return res.json({
      users: [{
        name: 'Bruno Lino Andreo',
        username: 'bruandreo',
        email: 'brunolino2026@gmail.com'
      }]
    });
  }

}

export default Users;
