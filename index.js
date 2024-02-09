
import { connectDb } from './utils/db.js';
import express from 'express';

const app = express();

//routes
app.use(express.json());

connectDb().then(() => {
  app.listen(5500, () => {
    console.log('Connected to backend, listening on port 5500');
  });
});
