import { EntityRepository, Repository } from 'typeorm';
import Users from '../models/Users';

@EntityRepository(Users)
class UserRepo extends Repository <Users> {

}

export default UserRepo;
