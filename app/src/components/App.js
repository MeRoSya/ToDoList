import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Adder from "./Adder";
import ToDoList from "./ToDoList";

export default function App() {
  const [todos, setToDos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then(response => response.json())
      .then(todos => setToDos(todos));
  }, []);

  const addToDo = async (text) => {
    const newToDo = { id: v4(), content: text };

    setToDos([...todos, newToDo]);

    await fetch("/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    });
  }

  const removeToDo = (id) =>
    setTimeout(async () => {
      var newToDos = [...todos];
      var indexToRemove = newToDos.findIndex(todo => todo.id === id);

      if (indexToRemove > -1)
        newToDos.splice(indexToRemove, 1);

      setToDos(newToDos);

      await fetch("/todos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
    }, 250);

  return (
    <>
      <ToDoList toDos={todos} removeToDo={removeToDo} />
      <Adder addToDo={addToDo} />
    </>
  );
}
