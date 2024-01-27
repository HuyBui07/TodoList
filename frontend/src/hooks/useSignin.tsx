import { useState } from "react";
import { useDispatch } from "react-redux";

export const useSignin = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const signin = async (
    email: string,
    password: string,
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data);
      if (response.ok) {
        localStorage.setItem("token", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data.user });
      }
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { signin, error, loading };
};
