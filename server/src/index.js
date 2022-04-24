const { getToDos, addToDo, removeToDo } = require('./fileOperations');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/todos', (req, res) => {
    const newToDos = req.body;

    try {
        addToDo(newToDos);
        res.sendStatus(200);
    } catch (error) {
        console.error("Following error occurred: ", error);
        res.sendStatus(500);
    }
});

app.delete('/todos', (req, res) => {
    const idToRemove = req.body.id;

    try {
        removeToDo(idToRemove);
        res.sendStatus(200);
    } catch (error) {
        console.error("Following error occurred: ", error);
        res.sendStatus(500);
    }
});

app.get('/todos', (req, res) => {
    try {
        const toDos = getToDos();
        res.send(toDos);
    } catch (error) {
        console.error("Following error occurred: ", error);
        res.sendStatus(500);
    }
});

app.listen(process.env.PORT || 8080);
