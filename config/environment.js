import dotenv from 'dotenv';
import path from 'path';

const env_path = process.env.NODE_ENV;
console.log(env_path)

dotenv.config({ path: path.resolve(path.dirname(''), `./.env.${env_path.trim()}`) });

export default {
    secret: process.env.JWT_SECRET,
    mongo_conn: process.env.MONGO_CONN,
    postgres_conn: process.env.POSTGRES_CONN
};