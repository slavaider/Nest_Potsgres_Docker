const { Router } = require('express');

const router = new Router();
const tasksService = require('./task.service');
const Task = require('./task.model');


// GET ALL
router.get('/', async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});
// POST
router.post('/', async (req, res) => {
  const task = await tasksService.createTask(new Task(req.body));
  res.status(201).json(task);
});
// GET ID
router.get('/:id', async (req, res) => {
  const task = await tasksService.getById(req.params.id);
  res.json(task);
});
// PUT ID
router.put('/:id', async (req, res) => {
  const task = await tasksService.putById(req.body, req.params.id);
  res.json(task);
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const status = await tasksService.deleteById(req.params.id);
  res.status(status).send();
});

module.exports = router;
