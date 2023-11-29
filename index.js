import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import fault from './routes/fault.js'

const app = express();
app.use(cors()); 

const uri = "mongodb+srv://mulchandanilakshman:ugfault@cluster0.xrdy6zr.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.use('/',fault)

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
