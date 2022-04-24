const fs = require('fs');
const fileName = './todos.json';

module.exports.getToDos = () => {

    if(!fs.existsSync(fileName))
        fs.appendFileSync(fileName, JSON.stringify([]));

    return JSON.parse(
        fs.readFileSync(fileName, (err) => {
        if (err) throw err;
    }));
}

module.exports.addToDo = (toDo) => {
    const oldToDos = this.getToDos();
    console.log([...oldToDos, toDo]);
    this.saveToDos([...oldToDos, toDo]);
}

module.exports.removeToDo = (id) => {
    const oldToDos = this.getToDos();

    const indexToRemove = oldToDos.findIndex(todo => todo.id === id);

    oldToDos.splice(indexToRemove, 1);

    this.saveToDos(oldToDos);
}

module.exports.saveToDos = (toDos) => {

    if(!fs.existsSync(fileName))
        fs.appendFileSync(fileName, JSON.stringify([]));
    
    fs.writeFileSync(fileName, JSON.stringify(toDos), (err) => {
        if (err) throw err;
        console.log("Todos updated");
    });
}
