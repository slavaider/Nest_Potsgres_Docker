import config from './common/config';
import app from './app';
import { createConnection } from 'typeorm';

app.listen(config.PORT, (): void => {
  console.log(`App is running on http://localhost:${config.PORT}`);
  createConnection().then(()=>{
    console.log('Connected to Typeorm');
  });
});
