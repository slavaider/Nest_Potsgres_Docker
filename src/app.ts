import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
// Routes
import path from 'path';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/board/board.router';
import taskRouter from './resources/task/task.router';
import { errorHandler } from './middlewares/error-handler';
import { logger } from './middlewares/logger';
const app = express();
const swaggerDocument = YAML.load(path.resolve(__dirname, '../doc/api.yaml'));

// Middleware
app.use(express.json());
app.use(logger);
process.on('uncaughtException',errorHandler);
process.on('unhandledRejection',errorHandler);


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
