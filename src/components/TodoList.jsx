import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <TodoItem key={index} todo={item} />
      ))}
    </ul>
  );
}
