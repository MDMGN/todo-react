import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

export default function TodoList() {
  const { todos } = useTodos();

  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <TodoItem key={index} todo={item} />
      ))}
    </ul>
  );
}
