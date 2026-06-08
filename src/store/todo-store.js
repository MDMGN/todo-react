export function addTodoStore(newTodo) {
  const currentTodos = getTodosStore();
  const updatedTodos = [...currentTodos, newTodo];
  // Guardar la tarea en localStorage
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

export function getTodosStore() {
  const savedTodos = localStorage.getItem("todos");
  const todos = JSON.parse(savedTodos);
  return Array.isArray(todos) ? todos : [];
}
