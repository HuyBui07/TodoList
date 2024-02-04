import { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoActions";

//const
import API_CONST from "../constants/apiConstants";

function TodoForm({ className }: { className: string }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const user = useSelector((state: any) => state.user.user);

  const handleAddTodo = async () => {
    if (!user) {
      setError("You must be logged in to add a todo");
      return;
    }

    try {
      const res = await fetch(API_CONST + "/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      const newTodo = await res.json();
      dispatch(addTodo(newTodo));
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      className={
        "flex flex-col h-[250px] border-2 rounded-[20px] mt-16 mr-4 p-10 " +
        className
      }
    >
      <form>
        <label className="block mb-4 text-xl">Content</label>
        <input
          type="text"
          className="mb-4"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>

      <button onClick={handleAddTodo}>Add Todo</button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default TodoForm;
