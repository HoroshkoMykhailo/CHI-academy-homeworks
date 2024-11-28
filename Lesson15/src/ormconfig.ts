import { DataSource } from 'typeorm';
import { dbconfig } from './db.config';
// import { NewsPost } from './entity/NewsPost';

export default new DataSource({
    ...dbconfig,
    type: 'postgres',
    migrations: ['./src/migrations/*.ts'],
});