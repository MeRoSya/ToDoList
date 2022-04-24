import { render, fireEvent, screen } from '@testing-library/react'
import Adder from '../components/Adder';

const addToDos = (todos) => (text) => {
  todos.push({ text: text });
}

test('Add todo', () => {
  const todos = [];

  render(<Adder addToDo={addToDos(todos)} />);

  const addButton = screen.getByTestId('AddNewToDo');
  const input = screen.getByTestId('ToDoInput');

  input.value = 'test';

  fireEvent.click(addButton);

  expect(todos[todos.length - 1].text).toBe('test');
});

test('Add multiple todos', () => {
  const todos = [];

  render(<Adder addToDo={addToDos(todos)} />);

  const addButton = screen.getByTestId('AddNewToDo');
  const input = screen.getByTestId('ToDoInput');

  for (let i = 0; i < 10; i++) {
    input.value = 'test' + i;

    fireEvent.click(addButton);
  }

  for (let i = 0; i < 10; i++) {
    expect(todos[i].text).toBe(`test${i}`);
  }
});

test('Add empty todo', () => {
  const todos = [];

  render(<Adder addToDo={addToDos(todos)} />);

  const addButton = screen.getByTestId('AddNewToDo');
  const input = screen.getByTestId('ToDoInput');

  input.value = '';

  fireEvent.click(addButton);

  expect(todos).toEqual([]);
});
