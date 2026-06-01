import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    /*  if (todo.trim() === "") return; // Evitar agregar tareas vacías

    setTodos([...todos, todo]);
    setTodo(""); // Limpiar el input después de agregar la tarea */
  }

  return (
    // React Fragment
    <>
      <div className="App">
        <h1 className="title">Todo App con React</h1>
        <div className="todo-container">
          <Input />
          
          <button onClick={addTodo}>Agregar</button>

          <ul className="todo-list">
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
