const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  host: process.env['POSTGRES_HOST'] = "postgres",
  type: 'postgres',
  port: Number(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  synchronize: true,
  extra: {
    ssl: false
  },
  entities: ["src/entity/*.ts"],
  migrations: ["src/migration/*.ts"],
  cli: {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration",
  }
};
