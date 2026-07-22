import { create } from "zustand";
import getTodosUseCase from "../usecases/getTodos.usecase";
import addTodoUseCase from "../usecases/addTodo.usecase";
import deleteTodoUseCase from "../usecases/deleteTodo.usecase";
import updateTodoUseCase from "../usecases/updateTodo.usecase";
import getTodoUseCase from "../usecases/getTodo.usecase";

const useTodosStore = create((set, get) => ({
  todos: [],
  error: null,
  loadTodos: async (accesToken) => {
    set({ error: null });
    try {
      const todos = await getTodosUseCase(accesToken);
      set({ todos });
    } catch (error) {
      set({ error });
    }
  },
  getTodo: async (id) => {
    try {
      const todo = await getTodoUseCase(id);
      return todo;
    } catch (error) {
      set({ error });
      return null;
    }
  },
  addTodo: async ({ title, onCompleted, accessToken }) => {
    set({ error: null });
    try {
      const newTodo = await addTodoUseCase({ title, accessToken });
      const updatedTodos = [...get().todos, newTodo];
      set({ todos: updatedTodos });
    } catch (error) {
      set({ error });
    } finally {
      onCompleted?.();
    }
  },
  updateTodo: async (newTodo, accessToken) => {
    try {
      const updatedTodo = await updateTodoUseCase(
        newTodo.id,
        accessToken,
        newTodo,
      );
      const updatedTodos = get().todos.map((todo) =>
        todo.id === newTodo.id ? updatedTodo : todo,
      );
      set({
        todos: updatedTodos,
      });
    } catch (error) {
      set({ error });
    }
  },
  removeTodo: async (todoId, accessToken) => {
    set({
      error: null,
    });
    try {
      const deletedTodo = await deleteTodoUseCase(todoId, accessToken);
      const updatedTodos = get().todos.filter(
        (todo) => todo.id !== deletedTodo.id,
      );
      set({
        todos: updatedTodos,
      });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useTodosStore;
