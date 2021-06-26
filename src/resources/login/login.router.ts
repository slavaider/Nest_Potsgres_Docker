import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getRepository } from 'typeorm';
import User from '../../entity/user.model';
import bcrypt from 'bcryptjs';

dotenv.config();
const router = express.Router();

router.post('/login', async (req, res, _next) => {
  const userRouter = getRepository(User);
  const user = await userRouter.findOne({
    login: req.body.login
  });
  if (user) {
    bcrypt.compare(req.body.password, user.password).then((result) => {
      if (result) {
        const token = jwt.sign({ login: req.body.login, password: req.body.password }, process.env['JWT_SECRET_KEY']);
        res.json({ token });
      } else {
        res.status(405).send('Wrong password');
      }
    });
  } else {
    res.status(401).send('Forbidden');
  }
});

export default router;
