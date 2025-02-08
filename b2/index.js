import express from 'express';
import connect from './db.js';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.use(express.json());

app.use(rootRoutes);

app.listen(port, () => {
    console.log(`BE is running port ${port}`);
})
