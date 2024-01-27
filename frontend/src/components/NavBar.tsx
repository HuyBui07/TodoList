import { useNavigate } from "react-router-dom";

//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

//custom hooks
import { useLogout } from "../hooks/useLogout";

function NavBar() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const handleSignout = () => {
    logout();
  };

  return (
    <div className="bg-pastel-green h-20 flex justify-center items-center">
      <h1 className="text-white">My Todolist</h1>
      <button className="absolute right-8 w-auto" onClick={handleSignout}>
        <FontAwesomeIcon icon={faSignOutAlt} className="text-white mr-4" />
        Sign out
      </button>
    </div>
  );
}

export default NavBar;
