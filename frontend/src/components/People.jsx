import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Context";

const People = () => {
  const { otherusers } = useContext(ThemeContext);
  
  return (
    <div className="w-full   cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] hover:blur-none hover:scale-95 transition-all duration-300 h-full border p-1 border-white rounded-lg  flex flex-row items-center justify-start gap-2">
      <img
        src={otherusers?.user?.profilePicture}
        alt="user"
        className="w-10 h-10 rounded-full"
      />
      <p className="text-white">{otherusers?.user?.username}</p>
    </div>
  );
};

export default People;
