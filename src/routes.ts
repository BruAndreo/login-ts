import { Router } from 'express';
import Users from './controllers/Users';


const routes: Router = Router();

const users: Users = new Users();

routes.get('/users', users.listUsers);
routes.post('/users', users.createUser);

export default routes;
