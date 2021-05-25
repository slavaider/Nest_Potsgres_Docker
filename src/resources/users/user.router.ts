import { Router } from 'express';
import User from './user.model';
import usersService from './user.service';

const router = Router();

// GET ALL
router.get('/', async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});
// POST
router.post('/', async (req, res) => {
  const user = await usersService.createUser(new User(req.body));
  res.status(201).json(User.toResponse(user));
});
// GET ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.getById(id);
    if (user) res.json(User.toResponse(user));
  }
});
// PUT ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.putById(req.body, id);
    if (user) res.json(User.toResponse(user));
  }
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await usersService.deleteById(id);
    res.status(status).send();
  }
});

export default router;
