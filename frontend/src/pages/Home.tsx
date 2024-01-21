import { useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../actions/todoActions";

//components
import NavBar from "../components/NavBar";
import TodoTile from "../components/TodoTile";
import TodoForm from "../components/TodoForm";
import EditModal from "../components/EditModal";

//const
import API_CONST from "../constants/apiConstants";

//types
import { Todo } from "../models/Todo";

function Home() {
  const dispatch = useDispatch();

  const open = useSelector((state: any) => state.editModal.open);
  const todos: Todo[] = useSelector((state: any) => state.todo.todos) || [];

  const fetchTodos = async () => {
    const res = await fetch(API_CONST);
    const data = await res.json();
    dispatch(setTodos(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {open && <EditModal />}
      <NavBar />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {todos.map((todo) => (
            <TodoTile todo={todo} />
          ))}
        </div>

        <TodoForm className="col-span-1" />
      </div>
    </div>
  );
}

export default Home;
