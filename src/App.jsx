import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import EmptyMessage from "./components/EmptyMessage";
import { useContext, useRef } from "react";
import { TODOContext } from "./context/TODOContext";
import DarkModeButton from "./components/DarkModeButton";
import useTheme from "./theme/useTheme";

function App() {
  const inputRef = useRef();
  const currentTheme = useTheme();

  const {
    todos,
    addTodo,
    isSortCompleted,
    setIsSortCompleted,
    sortTodosCompleted,
  } = useContext(TODOContext);

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
      <header className="app-header">
        <div>
          <p className="app-label">Curso React</p>
          <h1 className={currentTheme.title}>Todo App con React</h1>
          <p className={currentTheme.appSummary}>
            {todoCounter} guardadas en este navegador
          </p>
        </div>
        <div className="app-btn-darkMode-container">
          <DarkModeButton />
        </div>
      </header>

      <form className={currentTheme.todoForm}>
        <label className="sr-only" htmlFor="new-todo">
          Nueva tarea
        </label>
        <Input
          id="new-todo"
          name="new-todo"
          ref={inputRef}
          className="todo-input"
          type="text"
          placeholder="Escribe tu tarea..."
          valueInitial=""
        />
        <Button
          type="submit"
          title="Agregar"
          variant="primary"
          onClick={handleAddTodo}
        />
        <div>
          <label htmlFor="">Ordenar por tareas realizadas: </label>
          <Input
            checked={isSortCompleted}
            type={"checkbox"}
            onChange={() => setIsSortCompleted(!isSortCompleted)}
          />
        </div>
      </form>

      <section className="todo-section" aria-live="polite">
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

export default App;
