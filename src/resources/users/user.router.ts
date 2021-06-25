import { Router } from 'express';
import User from '../../entity/user.model';
import usersService from './user.service';
import bcrypt from 'bcryptjs';
const router = Router();
import guard from '../../middlewares/login.guard'

function toResponse(user:User){
  return {id:user.id?.toString(),name:user.name,login:user.login}
}
// GET ALL
router.get('/',guard,async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(toResponse));
});
// POST
router.post('/',guard,async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);

  if(req.body.login === 'admin') {
    if(req.body.secretPass) delete req.body.secretPass;
    const admin = await usersService.createAdmin(req.body);
    if(admin === 204){
      res.status(201).json({exists: true});
    }else{
      res.status(201).json(toResponse(admin as User));
    }
  }else{
    const user = await usersService.createUser(req.body);
    res.status(201).json(toResponse(user as User));
  }
});
// GET ID
router.get('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.getById(Number(id));
    if (user) res.json(toResponse(user));
  }
});
// PUT ID
router.put('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await usersService.putById(req.body, Number(id));
    if (user) res.json(toResponse(user));
  }
});
// DELETE ID
router.delete('/:id', guard,async (req, res) => {
  const { id } = req.params;
  if (id) {
    const status = await usersService.deleteById(Number(id));
    res.status(status).send();
  }
});

export default router;
