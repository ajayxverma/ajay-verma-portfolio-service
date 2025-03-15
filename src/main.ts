import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRouter from './routes/contact.routes';
import { envConfig } from './utils/env.config.utils';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get('/', (_req: Request, res: Response) => {
  return res.send('Service is running');
});
app.use(contactRouter);
const port = envConfig.port || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
