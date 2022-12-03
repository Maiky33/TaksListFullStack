import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import taksRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(taksRoutes);

app.listen(PORT);
console.log(`server is running on ${PORT}`);
