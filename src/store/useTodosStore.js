import { create } from "zustand";
import { updateTodoStore } from "./todo-store";

import getTodosUseCase from "../usecases/getTodos.usecase";

const useTodosStore = create((set, get) => ({
  todos: [],
  error: null,
  loadTodos: async (accesToken) => {
    try {
      const todos = await getTodosUseCase(accesToken);
      set({ todos });
    } catch (err) {
      set({ error: err });
    }
  },
  getTodo: (id) => get().todos?.find((todo) => todo.id === id),
  addTodo: ({ title, onCompleted }) => {
    const newTodo = {
      id: Date.now().toString(36),
      title: title,
      createdAt: Date.now(),
      completed: false,
    };
    const updatedTodos = [...get().todos, newTodo];
    set({ todos: updatedTodos });
    updateTodoStore(updatedTodos);
    onCompleted?.();
  },
  updateTodo: (newTodo) => {
    const updatedTodos = get().todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo,
    );
    set({
      todos: updatedTodos,
    });
    updateTodoStore(updatedTodos);
  },
  removeTodo: (todoId) => {
    const updatedTodos = get().todos.filter((todo) => todo.id !== todoId);
    set({
      todos: updatedTodos,
    });
    updateTodoStore(updatedTodos);
  },
}));

export default useTodosStore;
