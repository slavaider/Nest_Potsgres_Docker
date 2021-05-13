const Board = require('./board.model');
const taskService = require('../task/task.service');

const boards = [];

const getAll = async () => boards

const createBoard = async (board) => {
  boards.push(board);
  return board
};

const getById = async (id) => {
  const idx = boards.findIndex((board) => board.id === id);
  if (idx === -1) {
    return 404;
  }
  return boards[idx];
};

const putById = async (newUser, id) => {
  const idx = boards.findIndex((board) => board.id === id);
  boards[idx] = new Board({ id, ...newUser });
  return boards[idx];
};

const deleteById = async (id) => {
  const idx = boards.findIndex((task) => task.id === id);
  if (idx === -1) {
    return 404;
  }
  await taskService.deleteBoard(id);
  boards.splice(idx, 1);
  return 204;
};

module.exports = { getAll, createBoard, getById, putById, deleteById };

