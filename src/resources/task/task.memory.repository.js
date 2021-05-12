const Task = require("./task.model")

const tasks = [];

const getAll = async () => new Promise((resolve) => {
  resolve(tasks);
});

const createTask = async (task) => {
  tasks.push(task);
  return new Promise((resolve) => {
    resolve(task);
  });
};

const getById = async (id) => new Promise((resolve) => {
  resolve(tasks.find((task) => task.id === id));
});

const putById = async (newUser, id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  tasks[idx] = new Task({ id, ...newUser });
  return new Promise((resolve) => {
    resolve(tasks[idx]);
  });
};

const deleteById = async (id) => {
  tasks.splice(tasks.findIndex((task) => task.id === id), 1);
  return new Promise((resolve) => {
    resolve(204);
  });
};

module.exports = { getAll, createTask, getById, putById, deleteById };

