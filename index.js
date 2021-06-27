import express from 'express'
const app = express();

app.use(express.json());

const router = express.Router();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('mi primera ruta en express');
});

app.post('/:id', (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    const lastname = req.query.lastname;
    const data = JSON.stringify(req.body);
    res.send(`mi primer post con id ${id} - ${name}, ${lastname} - body ${data}`);
});

app.delete('/', (req, res) => {
    res.send('mi primer delete');
});

app.put('/', (req, res) => {
    res.send('mi primer put');
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});