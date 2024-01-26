import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//const
import API_CONST from "../constants/apiConstants";

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const res = await fetch(API_CONST + "/users/register", {
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
      <h2 className="mb-4">Sign Up</h2>
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
      <label className="mb-4">Password</label>
      <input
        type="password"
        className="mb-4"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignUp} className="mb-8">Sign Up</button>
      <span className="m-auto">
        Already have an accout? <span className="text-pastel-green hover:cursor-pointer hover:opacity-50 " onClick={() => navigate("/signin")}>
            Click here
        </span>
      </span>
    </div>
  );
}

export default SignUpForm;
