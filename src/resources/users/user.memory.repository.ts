import  User from './user.model'
import taskService from '../task/task.service';

const users:User[] = [];

/**
 * Function to get all Users
 * from im-memory users list
 * @returns {Promise<User[]>} [Users list]
 */
const getAll = async ():Promise<User[]> => users

/**
 * Function to create user
 * @param user [object of User model]
 * @returns {Promise<User>} [return user back]
 */
const createUser = async (user:User): Promise<User> => {
  users.push(user);
  return user
};

/**
 * Function to get User by ID from in-memory list
 * @param id [id of User from users list]
 * @returns {Promise<User>} [return user from users list]
 */
const getById = async (id:string):Promise<User|undefined> => users.find((user) => user.id === id)

/**
 * Function to put User by ID to im-memory list
 * @param newUser [new object to put in list]
 * @param id [id of needed object]
 * @returns {Promise<User>} [new object of User model]
 */
const putById = async (newUser: { id?: string | undefined;
name?: string | undefined;
login?: string | undefined;
password?: string | undefined;
} | undefined, id: string): Promise<User|undefined> => {
  const idx = users.findIndex((user) => user.id === id);
  users[idx] = new User({ id, ...newUser });
  return users[idx]
};

/**
 * Function to delete object of User model from in-memory list
 * @param id [id of needed object]
 * @returns {Promise<number>} [return 404 if object not found and 204 if successful deleted]
 */
const deleteById = async (id:string): Promise<number> => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx !== -1) {
    await taskService.deleteUser(id);
    users.splice(idx, 1);
    return 204
  }
  return 404
};

export default { getAll, createUser, getById, putById, deleteById };
