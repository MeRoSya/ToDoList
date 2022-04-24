import React from 'react'
import ToDo from './ToDo'

import '../css/ToDoList.css'

export default function ToDoList(props) {
    return (
        <ul>
            {
                props.toDos.map(todo =>
                    <li key={todo.id}>
                        <input data-testid={todo.id} type={'checkbox'}
                            onClick={() => props.removeToDo(todo.id)} />
                        <ToDo content={todo.content} />
                    </li>
                )
            }
        </ul>
    )
}
