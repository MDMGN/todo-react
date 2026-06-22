import { updateTodoStore } from "../store/todo-store";

const TodoActions = {
  UPDATE_TODO: "UPDATE_TODO",
};

function TodoReducer(state, action) {
  switch (action.type) {
    case TodoActions.UPDATE_TODO: {
      const updatedTodos = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
      updateTodoStore(updatedTodos)
      return updatedTodos;
    }

    default:
      return state;
  }
}

export { TodoActions, TodoReducer };
