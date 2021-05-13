const Task = require('./task.model');

let tasks = [];

const getAll = async () => tasks;

const createTask = async (task) => {
  tasks.push(task);
  return task;
};

const getById = async (id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  return tasks[idx];
};

const putById = async (newUser, id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  tasks[idx] = new Task({ id, ...newUser });
  return tasks[idx];
};

const deleteById = async (id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  tasks.splice(idx, 1);
  return 204;
};
const deleteUser = async (id) => {
  let idx = -1;
  tasks = tasks.map(task => {
    if (task.userId === id) {
      const copy = { ...task };
      copy.userId = null;
      idx = task.id;
      return copy;
    }
    return task;
  });
  if (idx === -1) {
    return 404;
  }
  return 204;
};
const deleteBoard = async (id) => {
  tasks = tasks.filter(task => {
    if (task.boardId === id) {
      return false;
    }
    return task;
  });
  return 204;
};
module.exports = { getAll, createTask, getById, putById, deleteById, deleteUser, deleteBoard };

