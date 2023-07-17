import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

app.use(bodyParser.json({ limit: "3omb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "3omb", extended: true}))
app.use(cors());
 const CONNECTION_URL = "mongodb+srv://<manoah samuel>:<Say@6102>@cluster0.hh153j6.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);