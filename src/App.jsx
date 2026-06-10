import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import EmptyMessage from "./components/EmptyMessage";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, addTodo, inputRef } = useTodos();

  const isEmptyTodoList = todos.length === 0;

  return (
    // React Fragment
    <>
      <div className="App">
        <h1 className="title">Todo App con React</h1>
        <div className="todo-container">
          <Input
            ref={inputRef}
            type={"text"}
            placeholder={"Escribe tu tarea..."}
            valueInitial={""}
          />
          <Button onClick={addTodo} title={"Agregar"} />
        </div>
        {isEmptyTodoList ? <EmptyMessage /> : <TodoList todos={todos} />}
      </div>
    </>
  );
}

export default App;
