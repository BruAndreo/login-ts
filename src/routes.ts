import { Router } from 'express';
import Users from './controllers/Users';


const routes: Router = Router();

const users: Users = new Users();

routes.get('/users', users.listUsers);
routes.get('/users/:id', users.getUserById);
routes.post('/users', users.createUser);

export default routes;
