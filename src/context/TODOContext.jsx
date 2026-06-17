import { createContext } from "react";
import useTodos from "../hooks/useTodos";

const TODOContext = createContext({});

function TODOProvider({ children }) {
  const {
    addTodo,
    isSortCompleted,
    removeTodo,
    setIsSortCompleted,
    sortTodosCompleted,
    todos,
    updateTodo,
  } = useTodos();
  return (
    <TODOContext.Provider
      value={{
        todos,
        isSortCompleted,
        addTodo,
        removeTodo,
        setIsSortCompleted,
        sortTodosCompleted,
        updateTodo,
      }}
    >
      {children}
    </TODOContext.Provider>
  );
}

export { TODOContext, TODOProvider };
