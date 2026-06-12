import { useRef, useState } from "react";

export default function useTodo(todo, updateTodo) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  function onEdit(value) {
    if (isEditing) {
      updateTodo({ ...todo, title: value });
    } else {
      inputRef.current.focus();
    }
    setIsEditing(!isEditing);
  }

  return { isEditing, onEdit, inputRef };
}
