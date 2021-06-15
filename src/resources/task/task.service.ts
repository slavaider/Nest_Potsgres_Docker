import tasksRepo from './task.memory.repository';
import Task from '../../entity/task.model';

const getAll = ():Promise<Task[]> => tasksRepo.getAll();

const createTask = (task: Task): Promise<Task> => tasksRepo.createTask(task);

const getById = (id: number):Promise<number | Task | undefined> => tasksRepo.getById(id);

const putById = (newTask:Task, id: number):Promise<Task | undefined>  => tasksRepo.putById(newTask, id);

const deleteById = (id: number):Promise<number> => tasksRepo.deleteById(id);

const deleteUser = (id: number):Promise<void> => tasksRepo.deleteUser(id);

const deleteBoard = (id: number):Promise<void> => tasksRepo.deleteBoard(id);

export default { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };
