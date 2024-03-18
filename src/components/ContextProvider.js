import React, { createContext, useState } from "react";
import data from "../components/DataMock";

const contextObj = createContext();

function ContextProvider({ children }) {
  const [tasks, setTasks] = useState(data);

  const handleTasksChange = (newValue) => {
    setTasks(newValue);
  };

  const addTask = () => {
    const newItem = {
      id: new Date().getTime(),
      title: "",
      priority: "",
      description: "",
      done: false,
    };
    const newValue = [newItem, ...tasks];
    handleTasksChange(newValue);
  };

  const removeTask = (task) => {
    const indexToRemove = tasks.findIndex((item) => item.id === task.id);
    const newToDo = tasks
      .slice(0, indexToRemove)
      .concat(tasks.slice(indexToRemove + 1));
    handleTasksChange(newToDo);
  };

  const updateTask = (task) => {
    const indexToUpdate = tasks.findIndex((item) => item.id === task.id);
    const newToDo = tasks
      .slice(0, indexToUpdate)
      .concat([task])
      .concat(tasks.slice(indexToUpdate + 1));
    handleTasksChange(newToDo);
  };

  const setTaskDone = (task) => {
    task.done = true;
    updateTask(task);
  };

  return (
    <contextObj.Provider
      value={{ tasks, addTask, removeTask, updateTask, setTaskDone }}
    >
      {children}
    </contextObj.Provider>
  );
}

export { ContextProvider, contextObj };
