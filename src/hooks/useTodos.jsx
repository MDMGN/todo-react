import { useEffect, useRef, useState } from "react";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  function addTodo() {
    // Evitar agregar tareas vacías
    const newTodo = todoRef.current.value.trim();

    if (!newTodo) return;

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    // Guardar la tarea en localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    todoRef.current.value = ""; // Limpiar el campo de entrada después de agregar la tarea
  }

  // Cuando se monta el componente
  useEffect(() => {
    function loadTodos() {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }

    loadTodos();
  }, []);

  return { todos, todoRef, addTodo };
}
