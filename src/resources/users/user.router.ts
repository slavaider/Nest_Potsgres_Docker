import { Router } from 'express';
import User from '../../entity/user.model';
import usersService from './user.service';

const router = Router();
function toResponse(user:User){
  return {id:user.id?.toString(),name:user.name,login:user.login}
}
// GET ALL
router.get('/', async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(toResponse));
});
// POST
router.post('/', async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json(toResponse(user));
});
// GET ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.getById(Number(id));
    if (user) res.json(toResponse(user));
  }
});
// PUT ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.putById(req.body, Number(id));
    if (user) res.json(toResponse(user));
  }
});
// DELETE ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await usersService.deleteById(Number(id));
    res.status(status).send();
  }
});

export default router;
