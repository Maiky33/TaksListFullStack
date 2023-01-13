import express from "express";
import cors from 'cors';
import { PORT } from "./server/config.js";
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import indexRoutes from "./server/routes/index.routes.js";
import taksRoutes from "./server/routes/task.routes.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(cors());//para poder comunicarnos desde backend

app.use(indexRoutes);
app.use(taksRoutes);
app.use(express.static(join(__dirname, '../client/build')))

app.listen(PORT);
console.log(`server is running on ${PORT}`);
