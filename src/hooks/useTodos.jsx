import { useEffect, useState } from "react";
import { getTodosStore } from "../store/todo-store";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    // Evitar agregar tareas vacías
    const newTodo = todo.trim();
    if (!newTodo) return;
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  /*   function removeTodo(id) {
  }

  function updateTodo(id, newValue) {} */

  useEffect(() => {
    console.log("Renderizando por cada cambio en el estado de tareas...");
  }, [todos /* ,isLoading */]);

  // Cuando se monta el componente
  useEffect(() => {
    console.log("Renderizando solo una vez al montar el componente...");
    function loadTodos() {
      setTodos(getTodosStore());
    }
    // Cargar las tareas guardadas en localStorage al montar el componente
    loadTodos();
  }, []);

  return { todos, addTodo };
}
