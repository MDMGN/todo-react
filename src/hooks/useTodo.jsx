import { useCallback, useRef, useState } from "react";

export default function useTodo(todo, updateTodo) {
  const [isEditing, setIsEditing] = useState(false);
  /*  const [completed, setCompleted] = useState(todo.completed); */
  const inputRef = useRef(null);

  const onEdit = useCallback(
    (value) => {
      if (isEditing) {
        if (!value) {
          inputRef.current.focus();
          return;
        }

        updateTodo({ ...todo, title: value });
      } else {
        inputRef.current.focus();
      }
      setIsEditing(!isEditing);
    },
    [isEditing, todo, updateTodo],
  );

  return { isEditing, onEdit, inputRef /* completed, setCompleted */ };
}
