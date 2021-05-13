const Board = require('./board.model');
const taskService = require('../task/task.service');

const boards = [];

const getAll = async () => new Promise((resolve) => {
  resolve(boards);
});

const createBoard = async (board) => {
  boards.push(board);
  return new Promise((resolve) => {
    resolve(board);
  });
};

const getById = async (id) => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx === -1) {
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  return new Promise((resolve) => {
    resolve(boards[idx]);
  });
};

const putById = async (newUser, id) => {
  const idx = boards.findIndex((board) => board.id === id);
  boards[idx] = new Board({ id, ...newUser });
  return new Promise((resolve) => {
    resolve(boards[idx]);
  });
};

const deleteById = async (id) => {
  const idx = boards.findIndex((task) => task.id === id);
  if (idx === -1) {
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  const res = await taskService.deleteBoard(id);
  if(res === -1){
    return new Promise((resolve) => {
      resolve(404);
    });
  }
  boards.splice(idx, 1);
  return new Promise((resolve) => {
    resolve(204);
  });
};

module.exports = { getAll, createBoard, getById, putById, deleteById };

