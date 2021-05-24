const User = require('./user.model');
const taskService = require('../task/task.service');

const users = [];

/**
 * Function to get all Users
 * from im-memory users list
 * @returns {Promise<User[]>} [Users list]
 */
const getAll = async () => users

/**
 * Function to create user
 * @param user [object of User model]
 * @returns {Promise<User>} [return user back]
 */
const createUser = async (user) => {
  users.push(user);
  return user
};

/**
 * Function to get User by ID from in-memory list
 * @param id [id of User from users list]
 * @returns {Promise<User>} [return user from users list]
 */
const getById = async (id) => users.find((user) => user.id === id)

/**
 * Function to put User by ID to im-memory list
 * @param newUser [new object to put in list]
 * @param id [id of needed object]
 * @returns {Promise<User>} [new object of User model]
 */
const putById = async (newUser, id) => {
  const idx = users.findIndex((user) => user.id === id);
  users[idx] = new User({ id, ...newUser });
  return users[idx]
};

/**
 * Function to delete object of User model from in-memory list
 * @param id [id of needed object]
 * @returns {Promise<number>} [return 404 if object not found and 204 if successful deleted]
 */
const deleteById = async (id) => {
  const idx = users.findIndex((user) => user.id === id);
  if (idx !== -1) {
    await taskService.deleteUser(id);
    users.splice(idx, 1);
    return 204
  }
  return 404
};

module.exports = { getAll, createUser, getById, putById, deleteById };
