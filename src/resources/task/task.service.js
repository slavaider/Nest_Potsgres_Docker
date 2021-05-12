const tasksRepo = require('./task.memory.repository');

const getAll = () =>tasksRepo.getAll()

const createTask = (user) => tasksRepo.createTask(user)

const getById = (id) => tasksRepo.getById(id)

const putById = (newUser, id) =>  tasksRepo.putById(newUser, id)

const deleteById = (id)=>tasksRepo.deleteById(id)

module.exports = { getAll, createTask, getById, putById, deleteById };