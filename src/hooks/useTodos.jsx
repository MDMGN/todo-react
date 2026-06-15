import { useEffect, useRef, useState } from "react";
import { getTodosStore, updateTodoStore } from "../store/todo-store";

export default function useTodos() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  function addTodo() {
    const title = inputRef.current.value.trim();
    // Evitar agregar tareas vacías
    if (!title) return;

    const newTodo = {
      id: Date.now().toString(36),
      title,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    // Actualizamos nuestro localStorage
    updateTodoStore(updatedTodos);
    // Limpiamos y volvemos al foco del input
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function removeTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    updateTodoStore(filteredTodos);
  }

  function updateTodo(newTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo,
    );
    setTodos(updatedTodos);
    updateTodoStore(updatedTodos);
  }

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

  return { todos, addTodo, inputRef, removeTodo, updateTodo };
}
