import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//custom hooks
import { useSignin } from "../hooks/useSignin";

function SignInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signin, error, loading } = useSignin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignUp = async () => {
    setIsSubmitted(true);
    await signin(email, password);
  };

  useEffect(() => {
    if (isSubmitted && !loading && !error) {
      navigate("/home");
    }
  }, [isSubmitted, loading, error, navigate]);

  return (
    <div className="w-1/3 h-auto border-2 border-gray-300 rounded-2xl p-8 flex flex-col justify-center">
      <h2 className="mb-4">Sign In</h2>
      <form>
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

        <button onClick={handleSignUp} className="mb-8" disabled={loading}>
          Sign In
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
