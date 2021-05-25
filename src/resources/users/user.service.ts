import User from './user.model';

import  usersRepo from './user.memory.repository';

const getAll = () => usersRepo.getAll();

const createUser = (user: User) => usersRepo.createUser(user);

const getById = (id: string):Promise<User|undefined> => usersRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  name?: string | undefined;
  login?: string | undefined;
  password?: string | undefined;
}, id: string) => usersRepo.putById(newUser, id);

const deleteById = (id: string) => usersRepo.deleteById(id);

export default { getAll, createUser, getById, putById, deleteById };
