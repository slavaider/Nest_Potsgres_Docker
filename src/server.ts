import env_config from './common/config';
import app from './app';
import { createConnection } from 'typeorm';
import fetch from 'node-fetch'

app.listen(env_config.PORT, (): void => {
  console.log(`App is running on http://localhost:${env_config.PORT}`);
  createConnection().then(async () => {
    console.log('Connected to Typeorm');
    fetch(`http://localhost:${env_config.PORT}/users`,{
      method:'POST',
      headers:{
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({
        login:'admin',
        name: "admin",
        password: "admin",
        secretPass:env_config.JWT_SECRET_KEY
      })
    }).then(res=>res.json()).then((data)=>{
      if(data.exists){
        console.log('Admin was exist');
      }else{
        console.log('Admin was created');
      }
    }).catch(err=>{
      console.log(err.message);
    })
  });
});
