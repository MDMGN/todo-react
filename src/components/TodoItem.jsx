import Button from "./Button";
import Input from "./Input";
import useTodo from "../hooks/useTodo";
import { useContext } from "react";
import { TODOContext } from "../context/TODOContext";
import { Link } from "react-router-dom";

export default function TodoItem({ todo, theme }) {
  const { updateTodo, removeTodo } = useContext(TODOContext);
  const { id, title } = todo;
  const { isEditing, onEdit, inputRef } = useTodo(todo, updateTodo);
  const btnEditTitle = isEditing ? "Guardar" : "Editar";

  return (
    <Link
      to={`/${id}`}
      className={`${theme.todoItem}${isEditing ? " todo-item-editing" : ""}${
        todo.completed ? " todo-item-completed" : ""
      }`}
    >
      <Input
        id={`todo-completed-${id}`}
        name={`todo-completed-${id}`}
        className={theme.todoCheckbox}
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
      />
      <Input
        id={`todo-${id}`}
        name={`todo-${id}`}
        ref={inputRef}
        className={theme.todoItemInput}
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
    </Link>
  );
}
