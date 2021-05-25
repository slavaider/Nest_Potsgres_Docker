import User from './user.model';

import  usersRepo from './user.memory.repository';

const getAll = ():Promise<User[]> => usersRepo.getAll();

const createUser = (user: User):Promise<User> => usersRepo.createUser(user);

const getById = (id: string):Promise<User|undefined> => usersRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  name?: string | undefined;
  login?: string | undefined;
  password?: string | undefined;
}, id: string):Promise<User|undefined> => usersRepo.putById(newUser, id);

const deleteById = (id: string): Promise<number> => usersRepo.deleteById(id);

export default { getAll, createUser, getById, putById, deleteById };
