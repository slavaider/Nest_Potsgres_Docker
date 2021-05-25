import tasksRepo from './task.memory.repository';
import Task from './task.model';

const getAll = ():Promise<Task[]> => tasksRepo.getAll();

const createTask = (task: Task): Promise<Task> => tasksRepo.createTask(task);

const getById = (id: string):Promise<number | Task | undefined> => tasksRepo.getById(id);

const putById = (newUser: {
  id?: string | undefined;
  title?: string | undefined;
  order?: number | undefined;
  description?: null | undefined;
  boardId?: null | undefined;
  userId?: null | undefined;
  columnId?: null | undefined;
} | undefined, id: string):Promise<Task | undefined>  => tasksRepo.putById(newUser, id);

const deleteById = (id: string):Promise<number> => tasksRepo.deleteById(id);

const deleteUser = (id: string):Promise<number> => tasksRepo.deleteUser(id);

const deleteBoard = (id: string):Promise<number> => tasksRepo.deleteBoard(id);

export default { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };
