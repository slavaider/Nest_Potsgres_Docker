import express from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
// Routes
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/board/board.router');
const taskRouter = require('./resources/task/task.router');

const app = express();
const swaggerDocument = YAML.load(__dirname+ '../doc/api.yaml');

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
