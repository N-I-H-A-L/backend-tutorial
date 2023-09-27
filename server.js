import express from 'express';
import userRouter from './routes/userRoutes.js';
import { connectDB } from './database/data.js';

const app = express();
const port = 3001 | process.env.PORT;

connectDB();

const router = express.Router();

//Middlewares
app.use(express.json());
app.use("/users", userRouter);

app.get('/', (req, res)=>{
    res.send("Server is working");
});

app.listen(port, ()=>{
    console.log("Server started successfully!");
});