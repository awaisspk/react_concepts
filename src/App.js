import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState(['todo1', 'todo2', 'todo3']);
  return (
    <>
      <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />
    </>
  );
}

function TodoCount({ todos }) {
  return <div>Total Todos:{todos.length} </div>;
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    if (todo !== null || undefined || '') {
      setTodos((prevTodo) => [...prevTodo, todo]);
    } else {
      event.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
