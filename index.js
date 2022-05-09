import express, { json } from 'express'
import cors from 'cors'
import chalk from 'chalk';
import dotenv from 'dotenv';
import router from './routes';


const app = express();
app.use(json());
app.use(cors());
app.use(router)
dotenv.config();

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(chalk.green(`O servidor está em pé na ${port}`));
})