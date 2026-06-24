import { useMemo, useState } from "react";

export default function useTodos(todos) {
  /*  const [todos,setTodos] = useState([]) */
  const [isSortCompleted, setIsSortCompleted] = useState(false);

  const sortTodosCompleted = useMemo(() => {
    console.log("Todos se ha actulizado", todos);
    return todos.toSorted((a, b) => {
      if (a.completed !== b.completed) {
        return Number(b.completed) - Number(a.completed);
      }
      return a.title.localeCompare(b.title);
    });
  }, [todos]);

  /* function addTodo({ title, onCompleted }) {
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
  } */

  /* function removeTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    updateTodoStore(filteredTodos);
  } */

  /*  function updateTodo(newTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo,
    );
    setTodos(updatedTodos);
    updateTodoStore(updatedTodos);
  } */

  /*  useEffect(() => {
    console.log("Renderizando por cada cambio en el estado de tareas...");
  }, [todos ]); */

  // Cuando se monta el componente
  /*  useEffect(() => {
    console.log("Renderizando solo una vez al montar el componente...");
     function loadTodos() {
      setTodos(getTodosStore());
    }
    // Cargar las tareas guardadas en localStorage al montar el componente
    loadTodos(); 
  }, []); */

  return {
    isSortCompleted,
    setIsSortCompleted,
    sortTodosCompleted,
  };
}
