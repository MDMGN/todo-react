import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </ul>
  );
}
