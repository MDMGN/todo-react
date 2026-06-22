import { createContext, useReducer } from "react";
import useTodos from "../hooks/useTodos";
import { TodoActions, TodoReducer } from "../reducers/TODOReducer";
import { getTodosStore } from "../store/todo-store";

const TODOContext = createContext({});

function TODOProvider({ children }) {
  const {
    addTodo,
    isSortCompleted,
    removeTodo,
    setIsSortCompleted,
    sortTodosCompleted,
  } = useTodos();

  const [state, dispatch] = useReducer(TodoReducer, getTodosStore());

  return (
    <TODOContext.Provider
      value={{
        todos: state,
        isSortCompleted,
        addTodo,
        removeTodo,
        setIsSortCompleted,
        sortTodosCompleted,
        updateTodo: (newTodo) =>
          dispatch({
            type: TodoActions.UPDATE_TODO,
            payload: newTodo,
          }),
      }}
    >
      {children}
    </TODOContext.Provider>
  );
}

export { TODOContext, TODOProvider };
