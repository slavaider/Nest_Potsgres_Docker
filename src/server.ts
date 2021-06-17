import env_config from './common/config';
import app from './app';
import { createConnection } from 'typeorm';


app.listen(env_config.PORT, (): void => {
  console.log(`App is running on http://localhost:${env_config.PORT}`);
  createConnection().then(async () => {
    console.log('Connected to Typeorm');
  });
});
