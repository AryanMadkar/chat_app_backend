import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Context";
import Sendinput from "./Sendinput";

const Rightbar = () => {
  const { user } = useContext(ThemeContext);
  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div className="w-[55vw] h-[90vh] blur1 rounded-l-none rounded-r-2xl overflow-hidden flex flex-col justify-between items-center">
      <nav className="w-full h-[12vh] flex flex-row  border-b border-white justify-between bg-black items-center px-4">
        <div className="flex flex-row justify-between items-center gap-4">
          <img
            src={user?.user?.profilePicture}
            alt="user"
            className="w-10 h-10 rounded-full "
          />
          <p className="text-white text-xl font-bold ">
            {user?.user?.username}
          </p>
        </div>
      </nav>
      <div className="w-full h-[77.7vh]">
        <Sendinput />
      </div>
    </div>
  );
};

export default Rightbar;
