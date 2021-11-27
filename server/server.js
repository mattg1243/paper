import express from 'express';
import path from 'path';

const app = express();
// const router = express.Router();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
})

app.listen(port, () => {
    console.log("listening")
})