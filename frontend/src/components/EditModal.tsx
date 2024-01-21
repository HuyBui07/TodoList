import { useState, useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

function EditModal() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const _id = useSelector((state: any) => state.editModal._id);

  const fetchTodo = async () => {
    const editedContent = useSelector(
      (state: any) =>
        state.todo.todos.find((todo: any) => todo._id === _id).content
    );
    setContent(editedContent);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const handleEdit = async () => {
    dispatch({ type: "CLOSE_EDIT_MODAL" });
  };

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="h-[30%] w-[50%] bg-white flex flex-col items-start justify-center p-10 gap-6 rounded-2xl">
        <label className="block text-xl">Edit Todo</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <button
          onClick={handleEdit}
          className="bg-pastel-green w-[30%] h-10 text-white rounded-[10px] font-bold"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditModal;
