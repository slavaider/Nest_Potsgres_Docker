import { Router } from 'express';
import tasksService from './task.service';
import Task from '../../entity/task.model';

const router = Router();

function toResponse(task:Task){
  const id = task.id?.toString();
  return {...task,id};
}

// GET ALL
router.get('/boards/:boardId/tasks/', async (_req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks.map(toResponse));
});
// POST
router.post('/boards/:boardId/tasks/', async (req, res) => {
  const newTask = { ...req.body };
  const { boardId } = req.params;
  newTask.boardId = boardId;
  const task = await tasksService.createTask(newTask);
  res.status(201).json(toResponse(task));
});
// GET ID
router.get('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const task = await tasksService.getById(Number(id)).catch(console.log.bind(console));
    if (!task) {
      res.status(404).send();
    } else {
      res.json(toResponse(task as Task));
    }
  }
});
// PUT ID
router.put('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const task = await tasksService.putById(req.body, Number(id));
    res.json(toResponse(task as Task));
  }
});
// DELETE ID
router.delete('/boards/:boardId/tasks/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await tasksService.deleteById(Number(id));
    res.status(status).send();
  }
});

export default router;
