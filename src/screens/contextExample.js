import React, { useState, useEffect } from "react";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Context API" },
    { id: 2, title: "Build a React App" },
  ]);
  const doneTodos = todos.filter((item) => item.done != false);

  const addTodo = (title) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title }]);
  };

  const removeTodo = (item) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
  };

  const updateTodo = () => {};
  const markTodoAsDone = () => {};

  // You can use useEffect here if you need to perform side effects.

  //   define interface of the context
  // CRUD
  const value = {
    todos, // read data from context
    doneTodos,
    addTodo, // create data in context
    removeTodo, // delete data in context
    updateTodo, // update data in context
    markTodoAsDone, //
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
