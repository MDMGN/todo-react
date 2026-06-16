import TodoItem from "./TodoItem";

export default function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((item) => (
        
        <TodoItem
          key={item.id}
          todo={item}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
