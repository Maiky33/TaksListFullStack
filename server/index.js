import express from "express";
import cors from 'cors'
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taksRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());
app.use(cors());//para poder comunicarnos desde backends

app.use(indexRoutes);
app.use(taksRoutes);

app.listen(PORT);
console.log(`server is running on ${PORT}`);
