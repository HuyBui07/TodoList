import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//custom hooks
import { useSignup } from "../hooks/useSignup";

function SignUpForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signup, error, loading } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    await signup(email, password, confirmPassword);
  };

  return (
    <div className="w-1/3 h-auto border-2 border-gray-300 rounded-2xl p-8 flex flex-col justify-center">
      <h2 className="mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type="submit" className="mb-8" disabled={loading}>
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <span className="m-auto">
        Already have an accout?{" "}
        <span
          className="text-pastel-green hover:cursor-pointer hover:opacity-50 "
          onClick={() => navigate("/signin")}
        >
          Click here
        </span>
      </span>
    </div>
  );
}

export default SignUpForm;
