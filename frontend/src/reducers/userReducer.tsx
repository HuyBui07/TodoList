import { User } from "../models/User";

interface UserState {
  user: User | null;
}

interface UserAction {
  type: string;
  payload: User | null;
}

const initalState: UserState = {
  user: null,
};

function userReducer(state = initalState, action: UserAction) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default userReducer;
