import React, { useContext } from "react";
import { ThemeContext } from "../context/Context";
import axios from "axios";
import { useState } from "react";
import People from "./People";
import { toast } from 'react-toastify';
const Sidebar = () => {
  const { setAuthorised, otherusers } = useContext(ThemeContext);
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/logout");
      console.log(response);
      setAuthorised(false);


    } catch (error) {
      console.error(error);
      toast.error("Error logging out");
    }
  };
  const [search, setSearch] = useState("");
  return (
    <div className="w-[25vw] h-[90vh] blur1 rounded-r-none rounded-l-2xl flex  justify-between flex-col">
      <div className="h-[12vh] border-b border-white flex items-center justify-start px-[1rem]    ">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="h-[68vh] flex-wrap border-b gross overflow-auto border-white">
        <div className="flex flex-col gap-2 p-2 overflow-auto">
          <div className="flex flex-wrap gap-2 overflow-auto">
            <People className="w-full h-[6rem]" />
            <People className="w-full h-[6rem]" />
            <People className="w-full h-[6rem]" />
            <People className="w-full h-[6rem]" />
            <People className="w-full h-[6rem]" />
           
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex flex-row justify-start px-[1rem] items-center">
        <button onClick={handleLogout} className="btn btn-error">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
