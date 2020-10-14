import express from 'express';

const port = 3333;

const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
    return res.json({ message: 'Hello World'})
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});