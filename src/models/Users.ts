import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class Users {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column('int')
  type: number;

  @Column('time without time zone')
  createdAt: Date;

  @Column('time without time zone')
  updatedAt: Date;
}

export default Users;
