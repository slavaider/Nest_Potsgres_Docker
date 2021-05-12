const boardsRepo = require('./board.memory.repository');

const getAll = () =>boardsRepo.getAll()

const createBoard = (user) => boardsRepo.createBoard(user)

const getById = (id) => boardsRepo.getById(id)

const putById = (newUser, id) =>  boardsRepo.putById(newUser, id)

const deleteById = (id)=>boardsRepo.deleteById(id)

module.exports = { getAll, createBoard, getById, putById, deleteById };
