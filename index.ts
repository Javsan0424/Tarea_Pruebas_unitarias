import express from 'express';

const app = express();
const Port = 3000


app.use("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(Port, () => console.log('Server running'))

