import express from 'express'
import cors from 'cors'
import { MongoClient } from "mongodb";
import chalk from 'chalk';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.PORT

let database = null;
const mongoClient = new MongoClient(process.env.MONGO_URL);

const promise = mongoClient.connect()
promise.then(() => {
	database = mongoClient.db(process.env.BANCO);
    console.log(chalk.green("Conexão com o banco de dados MongoDB estabelecida"))
});
promise.catch((e)=> console.log("erro ao se conectar ao banco de dados", e))


app.post("/", (req, res) =>{
    database.collection("teste").insertOne(req.body).then(()=>{
        res.sendStatus(201)
    })
    
})

app.listen(port, ()=>{
    console.log(chalk.green(`O servidor está em pé na ${port}`));
})