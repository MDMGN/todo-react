import { useEffect, useMemo, useState } from "react";
import { getTodosStore, updateTodoStore } from "../store/todo-store";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [isSortCompleted, setIsSortCompleted] = useState(false);

  const sortTodosCompleted = useMemo(() => {
    return todos.toSorted((a, b) => {
      if (a.completed !== b.completed) {
        return Number(b.completed) - Number(a.completed);
      }
      return a.title.localeCompare(b.title);
    });
  }, [todos]);

  function addTodo({ title, onCompleted }) {
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
    // Se ejecuta cuando actulizamos el estado y localStorage
    onCompleted?.();
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

  return {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
    isSortCompleted,
    setIsSortCompleted,
    sortTodosCompleted,
  };
}
