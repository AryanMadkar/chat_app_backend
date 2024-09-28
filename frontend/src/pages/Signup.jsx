import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/Context";
const Signup = () => {
  const { authorised, setAuthorised, setUser } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [gender, setgender] = useState("male");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          username: username,
          fullname: fullname,
          password: password,
          confirmPassword: confirmPassword,
          gender: gender,
        }
      );
      setUser(response.data);
      toast.success("Registration successful");
      setAuthorised(true);
    } catch (error) {
      setAuthorised(false);
      if (error.response.data.message === "Username already exists") {
        toast.error("Username already exists");
      }
      console.log(error.response.data.message);
      toast.error("An error occurred during registration");
    }
  };
  if (authorised) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div class=" blur1 rounded-lg p-10 flex flex-col  w-fit min-h-[70vh] mt-10 ">
        <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div class="relative mb-4">
            <input
              value={fullname}
              onChange={(e) => {
                setfullname(e.target.value);
              }}
              type="text"
              id="full-name"
              placeholder=" full name"
              name="full-name"
              class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
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
          <div class="relative mb-4">
            <input
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              type="password"
              id="conformpassword"
              name="conformpassword"
              placeholder="Conform your Password"
              class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <select
              value={gender}
              onChange={(e) => {
                setgender(e.target.value);
              }}
              name="gender"
              id="gender"
              class="w-full bg-black rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            class="text-white w-full bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
        <p class="text-xs text-gray-200 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
