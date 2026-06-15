export function updateTodoStore(newTodos) {
  if (!Array.isArray(newTodos)) return;
  // Guardar la tarea en localStorage
  localStorage.setItem("todos", JSON.stringify(newTodos));
}

export function getTodosStore() {
  const savedTodos = localStorage.getItem("todos");

  if (!savedTodos) return [];

  try {
    const todos = JSON.parse(savedTodos);
    return Array.isArray(todos) ? todos : [];
  } catch {
    return [];
  }
}
