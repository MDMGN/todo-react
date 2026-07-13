import { useRef } from "react";
import useTheme from "../theme/useTheme";
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoList";
import EmptyMessage from "./EmptyMessage";
import useTodosStore from "../store/useTodosStore";
import useTodos from "../hooks/useTodos";
import { useShallow } from "zustand/shallow";

export default function Home() {
  const inputRef = useRef();
  const currentTheme = useTheme();
  // Una de la formas correctas de llamar al estado por selectores dentro de zustand
  /*  const addTodo = useTodosStore(state=> state.addTodo)
      const todos = useTodosStore(state=> state.todos)
 */
  // La forma  simplificada de llamar al estado y metodos en zustand con "useShallow"
  const { addTodo, todos } = useTodosStore(
    useShallow((state) => ({
      todos: state.todos,
      addTodo: state.addTodo,
    })),
  );

  const { isSortCompleted, setIsSortCompleted, sortTodosCompleted } =
    useTodos(todos);

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo({
      title: inputRef.current.value.trim(),
      onCompleted: () => {
        inputRef.current.value = "";
        inputRef.current.focus();
      },
    });
  }

  const isEmptyTodoList = todos.length === 0;
  const todoCounter = todos.length === 1 ? "1 tarea" : `${todos.length} tareas`;
  return (
    <main className={currentTheme.app}>
      <p className={currentTheme.appSummary}>
        {todoCounter} guardadas en este navegador
      </p>
      <form className={currentTheme.todoForm} onSubmit={handleAddTodo}>
        <label className="sr-only" htmlFor="new-todo">
          Nueva tarea
        </label>
        <Input
          id="new-todo"
          name="new-todo"
          ref={inputRef}
          className={currentTheme.todoInput}
          type="text"
          placeholder="Escribe tu tarea..."
          valueInitial=""
        />
        <Button type="submit" title="Agregar" variant="primary" />
        <div className={currentTheme.sortControl}>
          <label htmlFor="sort-completed">Ordenar por tareas realizadas</label>
          <Input
            id="sort-completed"
            name="sort-completed"
            className={currentTheme.todoCheckbox}
            checked={isSortCompleted}
            type="checkbox"
            onChange={() => setIsSortCompleted(!isSortCompleted)}
          />
        </div>
      </form>

      <section className={currentTheme.todoSection} aria-live="polite">
        {isEmptyTodoList ? (
          <EmptyMessage />
        ) : (
          <TodoList
            todos={isSortCompleted ? sortTodosCompleted : todos}
            theme={currentTheme}
          />
        )}
      </section>
    </main>
  );
}
