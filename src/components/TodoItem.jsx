import Button from "./Button";
import Input from "./Input";
import useTodo from "../hooks/useTodo";
import { Link } from "react-router-dom";
import useTodosStore from "../store/useTodosStore";
import useAuthStore from "../store/useAuthStore";
import { useShallow } from "zustand/shallow";

export default function TodoItem({ todo, theme }) {
  const { updateTodo, removeTodo } = useTodosStore(
    useShallow((state) => ({
      updateTodo: state.updateTodo,
      removeTodo: state.removeTodo,
    })),
  );

  const accessToken = useAuthStore((state) => state.token);

  const { id, title } = todo;
  const { isEditing, onEdit, inputRef } = useTodo(todo, updateTodo);
  const btnEditTitle = isEditing ? "Guardar" : "Editar";

  return (
    <div
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
        onChange={() =>
          updateTodo({ ...todo, completed: !todo.completed }, accessToken)
        }
      />
      <Link
        to={`/${id}`}
        onClick={(e) => {
          if (isEditing) {
            e.preventDefault();
          }
        }}
      >
        <Input
          id={`todo-${id}`}
          name={`todo-${id}`}
          ref={inputRef}
          className={theme.todoItemInput}
          readOnly={!isEditing}
          valueInitial={title}
          ariaLabel={`Tarea: ${title}`}
        />
      </Link>

      <div className="todo-actions">
        <Button
          onClick={() => onEdit(inputRef.current.value.trim())}
          title={btnEditTitle}
          variant={isEditing ? "primary" : "secondary"}
          className="button-small"
          ariaLabel={`${btnEditTitle} tarea: ${title}`}
        />
        <Button
          onClick={() => removeTodo(id, accessToken)}
          title="Eliminar"
          variant="danger"
          className="button-small"
          ariaLabel={`Eliminar tarea: ${title}`}
        />
      </div>
    </div>
  );
}
