import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
// Routes
import userRouter from './resources/users/user.router';
import boardRouter from './resources/board/board.router';
import taskRouter from './resources/task/task.router';
import path from 'path';

const app = express();
const swaggerDocument = YAML.load(path.resolve(__dirname, '../doc/api.yaml'));

app.use(express.json());

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
