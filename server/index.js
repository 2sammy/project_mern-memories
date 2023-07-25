import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import posts from './routes/posts.js'


const app = express();

app.use(bodyParser.json({ limit: "3omb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "3omb", extended: true}))
app.use(cors());
 const CONNECTION_URL = "mongodb+srv://samuelmanoah:Sammy123@cluster0.bq1cp7w.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 4500;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
