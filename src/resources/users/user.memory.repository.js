const User = require('./user.model');

const users = [];

const getAll = async () => new Promise((resolve) => {
  resolve(users);
});

const createUser = async (user) => {
  users.push(user);
  return new Promise((resolve) => {
    resolve(user);
  });
};

const getById = async (id) => new Promise((resolve) => {
  resolve(users.find((user) => user.id === id));
});

const putById = async (newUser, id) => {
  const idx = users.findIndex((user) => user.id === id);
  users[idx] = new User({ id, ...newUser });
  return new Promise((resolve) => {
    resolve(users[idx]);
  });
};

const deleteById = async (id) => {
  // TODO: delete boards with user
  users.splice(users.findIndex((user) => user.id === id), 1);
  return new Promise((resolve) => {
    resolve(204);
  });
};

module.exports = { getAll, createUser, getById, putById, deleteById };
