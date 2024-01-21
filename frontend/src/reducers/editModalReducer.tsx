const initialState = {
  open: false,
  _id: "",
};

const editModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "OPEN_EDIT_MODAL":
      return {
        ...state,
        open: true,
        _id: action.payload,
      };
    case "CLOSE_EDIT_MODAL":
      return {
        ...state,
        open: false,
        _id: "",
      };
    default:
      return state;
  }
};

export default editModalReducer;
