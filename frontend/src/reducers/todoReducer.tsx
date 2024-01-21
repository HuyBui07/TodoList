import { TodoState } from "../models/Todo";

const initalState: TodoState = {
  todos: [],
};

function todoReducer(state = initalState, action: any) {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
