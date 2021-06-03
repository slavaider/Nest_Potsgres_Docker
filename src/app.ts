import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/board/board.router';
import taskRouter from './resources/task/task.router';
import { logger } from './middlewares/logger';
import { customErrorHandler, errorHandler } from './middlewares/error-handler';
const app = express();
const swaggerDocument = YAML.load(path.resolve(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(logger);
app.use(errorHandler);
process.on('uncaughtException',customErrorHandler);
process.on('unhandledRejection',customErrorHandler);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use( taskRouter);

export default app
