import Button from "./Button";
import Input from "./Input";
import useTodo from "../hooks/useTodo";

export default function TodoItem({ todo, removeTodo, updateTodo }) {
  const { id, title } = todo;
  const { isEditing, onEdit, inputRef } = useTodo(todo, updateTodo);
  const btnEditTitle = isEditing ? "Guardar" : "Editar";

  console.log("Rederizando TodoItem");

  return (
    <li className={`todo-item${isEditing ? " todo-item-editing" : ""}`}>
      <Input
        type={"checkbox"}
        checked={todo.completed}
        onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
      />
      <Input
        id={`todo-${id}`}
        name={`todo-${id}`}
        ref={inputRef}
        className="todo-item-input"
        readOnly={!isEditing}
        valueInitial={title}
        ariaLabel={`Tarea: ${title}`}
      />
      <div className="todo-actions">
        <Button
          onClick={() => onEdit(inputRef.current.value.trim())}
          title={btnEditTitle}
          variant={isEditing ? "primary" : "secondary"}
          className="button-small"
          ariaLabel={`${btnEditTitle} tarea: ${title}`}
        />
        <Button
          onClick={() => removeTodo(id)}
          title="Eliminar"
          variant="danger"
          className="button-small"
          ariaLabel={`Eliminar tarea: ${title}`}
        />
      </div>
    </li>
  );
}
