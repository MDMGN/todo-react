import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import EmptyMessage from "./components/EmptyMessage";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    inputRef,
    removeTodo,
    updateTodo,
    isSortCompleted,
    setIsSortCompleted,
    sortTodosCompleted,
  } = useTodos();

  const isEmptyTodoList = todos.length === 0;
  const todoCounter = todos.length === 1 ? "1 tarea" : `${todos.length} tareas`;

  function handleSubmit(event) {
    event.preventDefault();
    addTodo();
  }

  return (
    <main className="App">
      <header className="app-header">
        <p className="app-label">Curso React</p>
        <h1 className="title">Todo App con React</h1>
        <p className="app-summary">{todoCounter} guardadas en este navegador</p>
      </header>

      <form className="todo-form" onSubmit={handleSubmit}>
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
        <Button type="submit" title="Agregar" variant="primary" />
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
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        )}
      </section>
    </main>
  );
}

export default App;
