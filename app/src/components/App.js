import { useState } from "react";
import { v4 } from "uuid";
import Adder from "./Adder";
import ToDoList from "./ToDoList";

export default function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (text) => {
    setToDos([...todos, { id: v4(), content: text }])
  }

  const removeToDo = (id) =>
    setTimeout(() => {
      var newToDos = [...todos];
      var indexToRemove = newToDos.findIndex(todo => todo.id === id);

      if (indexToRemove > -1)
        newToDos.splice(indexToRemove, 1);

      setToDos(newToDos);
    }, 250);

  return (
    <>
      <ToDoList toDos={todos} removeToDo={removeToDo} />
      <Adder addToDo={addToDo} />
    </>
  );
}
