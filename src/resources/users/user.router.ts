import {Router} from 'express';
import User from './user.model';
// @ts-ignore
const router = new Router();
import usersService from './user.service';

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
  const user = await usersService.getById(req.params.id);
  if(user) res.json(User.toResponse(user));
});
// PUT ID
router.put('/:id', async (req, res) => {
  const user = await usersService.putById(req.body, req.params.id);
  if(user) res.json(User.toResponse(user));
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const status = await usersService.deleteById(req.params.id);
  res.status(status).send();
});

export default router
