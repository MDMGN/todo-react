import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import EmptyMessage from "./components/EmptyMessage";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, todoRef, addTodo } = useTodos();

  console.log("Renderizando App...");

  return (
    // React Fragment
    <>
      <div className="App">
        <h1 className="title">Todo App con React</h1>
        <div className="todo-container">
          <Input
            ref={todoRef}
            type={"text"}
            placeholder={"Escribe tu tarea..."}
            valueInitial={""}
          />
          <Button onClick={addTodo} title={"Agregar"} />
        </div>
        {todos.length === 0 ? <EmptyMessage /> : <TodoList todos={todos} />}
      </div>
    </>
  );
}

export default App;
