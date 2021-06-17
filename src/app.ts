import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/board/board.router';
import taskRouter from './resources/task/task.router';
import { logger } from './middlewares/logger';
import { customErrorHandler, errorHandler } from './middlewares/error-handler';
import Task from './entity/task.model';
import User from './entity/user.model';
import Board from './entity/board.model';
import { createQueryBuilder, getRepository } from 'typeorm';
const app = express();
const swaggerDocument = YAML.load(path.resolve(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(logger);
app.use(errorHandler);
process.on('uncaughtException', customErrorHandler);
process.on('unhandledRejection', customErrorHandler);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/reset', async (_req, res) => {
  const tasks = getRepository(Task);
  const users = getRepository(User);
  await users.clear();
  await tasks.clear();
  await createQueryBuilder()
    .delete()
    .from(Board)
    .execute();
  res.json({ done: true });
});

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use(taskRouter);

export default app;
