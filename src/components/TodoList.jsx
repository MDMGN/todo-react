import TodoItem from "./TodoItem";

export default function TodoList({ todos, theme }) {
  return (
    <ul className={theme.todoList}>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} theme={theme} />
      ))}
    </ul>
  );
}
