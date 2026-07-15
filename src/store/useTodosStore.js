import { create } from "zustand";
import { updateTodoStore } from "./todo-store";
import { http } from "../helpers/helpers";
import { URL_TODOS } from "../config/api";

const useTodosStore = create((set, get) => ({
  todos: [],
  loadTodos: async (accesToken) =>
    http({
      url: URL_TODOS,
      token: accesToken,
      cbSuccess: (todos) => set({ todos }),
      cbError: (err) => console.error(err),
    }),
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
