import React, { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('todos');
    if (storedData) {
      console.log(storedData)
      setData(JSON.parse(storedData))
      setIsInitialLoad(false)
    }
  }, [])
  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem('todos', JSON.stringify(data))
    }
  }, [data]);
  const addTodo = (todo) => {
    setData((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setData((prev) =>
      prev.map((prevTodo) => (prevTodo.id == id ? todo : prevTodo))
    );
  };
  const deleteTodo = (id) => {
    setData((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };
  const toggleComplete = (id) => {
    setData((prev) => prev.map((todoPrev) => todoPrev.id == id ? { ...todoPrev, completed: !todoPrev.completed } : todoPrev))
  }


  return (
    <TodoContext.Provider value={{ data, setData, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  )
};
const useTodo = () => {
  return useContext(TodoContext)
}
export { TodoProvider, useTodo }
