import { updateTodoStore } from "../store/todo-store";

const TodoActions = {
  UPDATE_TODO: "UPDATE_TODO",
  DELETE_TODO: "DELETE_TODO",
  ADD_TODO: "ADD_TODO",
};

function TodoReducer(state, action) {
  switch (action.type) {
    case TodoActions.ADD_TODO: {
      const newTodo = {
        id: Date.now().toString(36),
        title: action.payload.title,
        createdAt: Date.now(),
        completed: false,
      };

      const updatedTodos = [...state, newTodo];
      updateTodoStore(updatedTodos);
      action.payload.onCompleted?.();
      return updatedTodos;
    }
    case TodoActions.UPDATE_TODO: {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      updateTodoStore(updatedTodos);
      return updatedTodos;
    }

    case TodoActions.DELETE_TODO: {
      const newTodos = state.filter((todo) => todo.id !== action.payload);
      updateTodoStore(newTodos);
      return newTodos;
    }

    default:
      return state;
  }
}

export { TodoActions, TodoReducer };
