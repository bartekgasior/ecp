import express from 'express';
import cors from 'cors';
import controllers from './controllers/index.js';
import 'dotenv/config';

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(controllers.UserController);

app.listen(port, () => console.log(`Listening on port ${port}`));
export default app;