const Board = require("./board.model")

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

const getById = async (id) => new Promise((resolve) => {
  resolve(boards.find((board) => board.id === id));
});

const putById = async (newUser, id) => {
  const idx = boards.findIndex((board) => board.id === id);
  boards[idx] = new Board({ id, ...newUser });
  return new Promise((resolve) => {
    resolve(boards[idx]);
  });
};

const deleteById = async (id) => {
  boards.splice(boards.findIndex((board) => board.id === id), 1);
  return new Promise((resolve) => {
    resolve(204);
  });
};

module.exports = { getAll, createBoard, getById, putById, deleteById };

