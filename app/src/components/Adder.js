import React, { useRef } from 'react'

export default function Adder(props) {
    const newToDoText = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            <input data-testid="ToDoInput"
                ref={newToDoText}
                type={'text'} />
            <input type={'submit'}
                value="Add a todo"
                data-testid="AddNewToDo"
                onClick={() => {
                    if (newToDoText.current.value !== '')
                        props.addToDo(newToDoText.current.value);

                    newToDoText.current.value = '';
                }} />
        </form>
    )
}
