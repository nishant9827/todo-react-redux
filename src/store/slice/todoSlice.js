// slice/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "1", todo: "Todo", completed: false }],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), todo: action.payload, completed: false };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((stateTodo) =>
        stateTodo.id === action.payload.id
          ? { ...stateTodo, todo: action.payload.todo }
          : stateTodo
      );
    },
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map((stateTodo) =>
        stateTodo.id === action.payload
          ? { ...stateTodo, completed: !stateTodo.completed }
          : stateTodo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
