import { useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";
import API_CONST from "../constants/apiConstants";

function TodoForm({ className }: { className: string }) {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handleAddTodo = async () => {
    const res = await fetch(API_CONST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const newTodo = await res.json();
    dispatch(addTodo(newTodo));
  };

  return (
    <div
      className={
        "flex flex-col h-[250px] border-2 rounded-[20px] mt-16 mr-4 p-10 " +
        className
      }
    >
      <form onSubmit={handleAddTodo}>
        <label className="block mb-4 text-xl">Content</label>
        <input
          type="text"
          className="mb-4"
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
      <button
        type="submit"
        onClick={handleAddTodo}
        className="bg-pastel-green w-[30%] h-10 text-white rounded-[10px] font-bold"
      >
        Add Todo
      </button>
    </div>
  );
}

export default TodoForm;
