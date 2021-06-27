import mongoose from 'mongoose';
import environment from '../config/environment';

const url = environment.mongo_conn;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', () => console.log('Error cconecting with database'));
db.on('open', () => console.log('success cconecting with database'));

export default db;