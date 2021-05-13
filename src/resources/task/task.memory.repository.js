const Task = require('./task.model');

let tasks = [];

const getAll = async () => new Promise((resolve) => {
  resolve(tasks);
});

const createTask = async (task) => {
  tasks.push(task);
  return new Promise((resolve) => {
    resolve(task);
  });
};

const getById = async (id) =>  {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  return new Promise((resolve) => {
    resolve(tasks[idx]);
  });
}

const putById = async (newUser, id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  tasks[idx] = new Task({ id, ...newUser });
  return new Promise((resolve) => {
    resolve(tasks[idx]);
  });
};

const deleteById = async (id) => {
  const idx = tasks.findIndex((task) => task.id === id);
  if (idx === -1) {
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  tasks.splice(idx, 1);
  return new Promise((resolve) => {
    resolve(204);
  });
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
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  return new Promise((resolve) => {
    resolve(204);
  });
};
const deleteBoard = async (id) => {
  tasks = tasks.filter(task => {
    if (task.boardId === id) {
     return false
    }
    return task;
  });
  return new Promise((resolve) => {
    resolve(204);
  });
};
module.exports = { getAll, createTask, getById, putById, deleteById, deleteUser ,deleteBoard};

