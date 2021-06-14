import Task from '../../entity/task.model';

let tasks: Task[] = [];

/**
 * Function to get all Tasks
 * from im-memory tasks list
 * @returns {Promise<Task[]>} [Tasks list]
 */
const getAll = async (): Promise<Task[]> => tasks;

/**
 * Function to create task
 * @param task [object of Task model]
 * @returns {Promise<Task>} [return task back]
 */
const createTask = async (task: Task): Promise<Task> => {
  tasks.push(task);
  return task;
};

/**
 * Function to get Task by ID from in-memory list
 * @param id [id of Task from tasks list]
 * @returns {Promise<number|Task>} [return status code 404 if not found, and Task if found]
 */
const getById = async (id: number): Promise<number | Task | undefined> => {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  return tasks[idx];
};

/**
 * Function to put Task by ID to im-memory list
 * @param newTask [new object to put in list]
 * @param id [id of needed object]
 * @returns {Promise<Task>} [new object of Task model]
 */
const putById = async (newTask:Task, id: number): Promise<Task | undefined> => {
  const idx = tasks.findIndex((task) => task.id === id);
  tasks[idx] = { id, ...newTask };
  return tasks[idx];
};

/**
 * Function to delete object of Task model from in-memory list
 * @param id [id of needed object]
 * @returns {Promise<number>} [return 404 if object not found and 204 if successful deleted]
 */
const deleteById = async (id: number):Promise<number> => {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  tasks.splice(idx, 1);
  return 204;
};
/**
 * Function to delete of all user tasks from im-memory list
 * @param id [id of User]
 * @returns {Promise<number>} [return 404 if object not found and 204 if successful deleted]
 */
const deleteUser = async (id: number): Promise<number> => {
  let idx: number | null = null;
  tasks = tasks.map(task => {
    if (task.userId === id) {
      const copy = { ...task };
      copy.userId = null;
      idx = Number(task.id);
      return copy;
    }
    return task;
  });
  if (idx === null) {
    return 404;
  }
  return 204;
};
/**
 * Function to delete tasks by Board ID
 * @param id [id of board]
 * @returns {Promise<number>} [return status 204 of successful deleted]
 */
const deleteBoard = async (id: number): Promise<number> => {
  tasks = tasks.filter(task => {
    if (task.boardId === id) {
      return false;
    }
    return task;
  });
  return 204;
};
export default { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };

