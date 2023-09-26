import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [
      { id: 1, content: "Loquear", completed: false },
      { id: 2, content: "Hacer Tarea de eso Tilin", completed: true },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Math.random() * 100,
        content: action.payload,
        completed: false,
      };
      state.todoList.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    markAsCompleted: (state, action) => {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, markAsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
