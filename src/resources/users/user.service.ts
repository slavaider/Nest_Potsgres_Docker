import User from '../../entity/user.model';

import  usersRepo from './user.memory.repository';

const getAll = ():Promise<User[]> => usersRepo.getAll();

const createUser = (user: User):Promise<User | number> => usersRepo.createUser(user);

const createAdmin = (user: User):Promise<User | number> => usersRepo.createAdmin(user);

const getById = (id: number):Promise<User|undefined> => usersRepo.getById(id);

const putById = (newUser: User, id: number):Promise<User|undefined> => usersRepo.putById(newUser, id);

const deleteById = (id: number): Promise<number> => usersRepo.deleteById(id);

export default { getAll, createUser, getById, putById, deleteById,createAdmin };

