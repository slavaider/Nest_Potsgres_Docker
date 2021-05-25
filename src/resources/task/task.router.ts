import { Router } from 'express';
import tasksService from './task.service';
import Task from './task.model';

const router = Router();


// GET ALL
router.get('/boards/:boardId/tasks/', async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});
// POST
router.post('/boards/:boardId/tasks/', async (req, res) => {
  const newTask = { ...req.body };
  const { boardId } = req.params;
  newTask.boardId = boardId;
  const task = await tasksService.createTask(new Task(newTask));
  res.status(201).json(task);
});
// GET ID
router.get('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const task = await tasksService.getById(id);
    if (task === 404) {
      res.status(404).send();
    } else {
      res.json(task);
    }
  }
});
// PUT ID
router.put('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const task = await tasksService.putById(req.body, id);
    res.json(task);
  }
});
// DELETE ID
router.delete('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await tasksService.deleteById(id);
    res.status(status).send();
  }
});

export default router;
