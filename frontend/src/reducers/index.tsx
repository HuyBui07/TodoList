import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import editModalReducer from "./editModalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  editModal: editModalReducer,
  user: userReducer,
});

export default rootReducer;
