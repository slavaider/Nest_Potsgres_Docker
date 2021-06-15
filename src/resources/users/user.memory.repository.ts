import User from '../../entity/user.model';
import { getRepository } from 'typeorm';
import taskService from '../task/task.service';

const getAll = async (): Promise<User[]> => {
  const userRepository = getRepository(User);
  return userRepository.find();
};

const createUser = async (user: User): Promise<User> => {
  const userRepository = getRepository(User);
  const newUser = userRepository.create(user);
  return  await userRepository.save(newUser);
};


const getById = async (id: number): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  return userRepository.findOne(id);
};


const putById = async (newUser: User, id: number): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  await userRepository.update(id, newUser);
  return newUser;
};


const deleteById = async (id: number): Promise<number> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);
  if (user) {
    await taskService.deleteUser(id);
    await userRepository.delete(id);
    return 204;
  }
  return 404;
};

export default { getAll, createUser, getById, putById, deleteById };
