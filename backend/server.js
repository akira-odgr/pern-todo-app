import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todos.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({ origin: ["https://pern-todo-app-lovat.vercel.app"] }));
app.use(express.json());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening port ${PORT}`);
});
