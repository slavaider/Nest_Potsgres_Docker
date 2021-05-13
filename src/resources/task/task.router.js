const { Router } = require('express');

const router = new Router();
const tasksService = require('./task.service');
const Task = require('./task.model');


// GET ALL
router.get('/boards/:boardId/tasks/', async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});
// POST
router.post('/boards/:boardId/tasks/', async (req, res) => {
  const newTask = {...req.body}
  newTask.boardId = req.params.boardId
  const task = await tasksService.createTask(new Task(newTask));
  res.status(201).json(task);
});
// GET ID
router.get('/boards/:boardId/tasks/:id', async (req, res) => {
  const task = await tasksService.getById(req.params.id);
  if(task===404){
    res.status(404).send();
  }else{
    res.json(task);
  }
});
// PUT ID
router.put('/boards/:boardId/tasks/:id', async (req, res) => {
  const task = await tasksService.putById(req.body, req.params.id);
  res.json(task);
});
// DELETE ID
router.delete('/boards/:boardId/tasks/:id', async (req, res) => {
  const status = await tasksService.deleteById(req.params.id);
  res.status(status).send();
});

module.exports = router;
