import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function handleAddTodo() {
    const todo = inputRef.current.value.trim();
    
    console.log({ todo });

    inputRef.current.value = "";
    inputRef.current.focus();
  }

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
          <Button onClick={handleAddTodo} title={"Agregar"} />
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
