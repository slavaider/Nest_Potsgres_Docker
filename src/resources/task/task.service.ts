import tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = () => tasksRepo.getAll();

const createTask = (task: Task) => tasksRepo.createTask(task);

const getById = (id: string) => tasksRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  title?: string | undefined;
  order?: number | undefined;
  description?: null | undefined;
  boardId?: null | undefined;
  userId?: null | undefined;
  columnId?: null | undefined;
} | undefined, id: string) => tasksRepo.putById(newUser, id);

const deleteById = (id: string) => tasksRepo.deleteById(id);

const deleteUser = (id: string) => tasksRepo.deleteUser(id);

const deleteBoard = (id: string) => tasksRepo.deleteBoard(id);

export default { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };
