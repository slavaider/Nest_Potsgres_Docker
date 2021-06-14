import config from './common/config';
import app from './app';
import { createConnection } from 'typeorm';

app.listen(config.PORT, (): void => {
  console.log(`App is running on http://localhost:${config.PORT}`);
  createConnection().then(async () => {
    console.log('connected to Typeorm');
  }).catch(console.log.bind(console));
});
