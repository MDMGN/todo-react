import { createContext, useReducer } from "react";
import useTodos from "../hooks/useTodos";
import { TodoActions, TodoReducer } from "../reducers/TODOReducer";
import { getTodosStore } from "../store/todo-store";

const TODOContext = createContext({});

function TODOProvider({ children }) {
  const [state, dispatch] = useReducer(TodoReducer, getTodosStore());

  const { isSortCompleted, setIsSortCompleted, sortTodosCompleted } =
    useTodos(state);

  return (
    <TODOContext.Provider
      value={{
        todos: state,
        isSortCompleted,
        // Buscamos el todo con el id que nos pasen desde el contexto
        getTodo: (todoId) => state.find((todo) => todo.id === todoId),
        addTodo: ({ title, onCompleted }) => {
          const trimedTitle = title.trim();
          if (!trimedTitle) return;
          dispatch({
            type: TodoActions.ADD_TODO,
            payload: { title: trimedTitle, onCompleted },
          });
        },
        removeTodo: (id) =>
          dispatch({
            type: TodoActions.DELETE_TODO,
            payload: id,
          }),
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
