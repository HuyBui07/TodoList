import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import editModalReducer from "./editModalReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  editModal: editModalReducer,
});

export default rootReducer;
