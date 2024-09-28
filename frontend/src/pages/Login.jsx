import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/Context";
const Login = () => {
  const { authorised, setAuthorised, setUser, user } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUser(response.data);
      toast.success("login successful");
      setAuthorised(true);
    } catch (error) {
      console.log(error.message);

      toast.error("User not found");
      setAuthorised(false);
    }
  };
  if (authorised) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div class=" blur1 rounded-lg p-10 flex flex-col  justify-around w-fit min-h-[70vh] mt-10 ">
        <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          <div class="relative mb-4">
            <input
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
              type="text"
              id="username"
              name="username"
              placeholder=" username"
              class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder=" password"
              class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            class="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
        <p class="text-xs text-gray-200 mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
