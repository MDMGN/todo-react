import Button from "./Button";
import Input from "./Input";
import useTodo from "../hooks/useTodo";

export default function TodoItem({ todo, removeTodo, updateTodo }) {
  const { id, title } = todo;
  const { isEditing, onEdit, inputRef } = useTodo(todo, updateTodo);
  const btnEditTitle = isEditing ? "Guardar" : "Editar";

  return (
    <li>
      <Input ref={inputRef} readOnly={!isEditing} valueInitial={title} />
      <span>
        <Button
          onClick={() => onEdit(inputRef.current.value.trim())}
          title={btnEditTitle}
        />
        <Button onClick={() => removeTodo(id)} title="Eliminar" />
      </span>
    </li>
  );
}
