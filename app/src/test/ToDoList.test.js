import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { useState } from 'react';
import ToDoList from '../components/ToDoList';

function Test(props) {
    const [todos, setToDos] = useState(props.todos);

    const removeToDo = (id) => {
        var newToDos = [...todos];
        var indexToRemove = newToDos.findIndex(todo => todo.id === id);

        if (indexToRemove > -1)
            newToDos.splice(indexToRemove, 1);

        setToDos(newToDos);
    }

    return (
        <ToDoList toDos={todos} removeToDo={removeToDo} />
    )
}

test('Render todos', () => {
    const todos = [
        {
            id: 1,
            content: "test"
        },
        {
            id: 2,
            content: "test"
        },
        {
            id: 3,
            content: "test"
        },
        {
            id: 4,
            content: "test"
        },
        {
            id: 5,
            content: "test"
        }
    ]

    render(<Test todos={todos} />);

    const renderedToDos = screen.getAllByTestId("ToDo");

    renderedToDos.forEach(todo =>
        expect(todo.innerHTML).toBe("test")
    );
});

test('Remove a todo', () => {
    const todos = [
        {
            id: 1,
            content: "test"
        },
        {
            id: 2,
            content: "test"
        },
        {
            id: 3,
            content: "toRemove"
        },
        {
            id: 4,
            content: "test"
        },
        {
            id: 5,
            content: "test"
        }
    ]

    render(<Test todos={todos} />);

    const removeTrigger = screen.getByTestId("3");

    fireEvent.click(removeTrigger);

    const renderedToDos = screen.getAllByTestId("ToDo");

    renderedToDos.forEach(todo =>
        expect(todo.innerHTML).toBe("test")
    );
});
