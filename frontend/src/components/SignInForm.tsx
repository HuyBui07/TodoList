import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//const
import API_CONST from "../constants/apiConstants";

function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await fetch(API_CONST + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      dispatch({ type: "SET_USER", payload: data });
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-1/3 h-auto border-2 border-gray-300 rounded-2xl p-8 flex flex-col justify-center">
      <h2 className="mb-4">Sign In</h2>
      <label className="mb-4">Username</label>
      <input
        type="text"
        className="mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="mb-4">Password</label>
      <input
        type="password"
        className="mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignUp} className="mb-8">
        Sign In
      </button>
      <span className="m-auto">
        Don't have an accout?{" "}
        <span
          className="text-pastel-green hover:cursor-pointer hover:opacity-50 "
          onClick={() => navigate("/")}
        >
          Click here
        </span>
      </span>
    </div>
  );
}

export default SignInForm;
