import React from "react";
import { IoMdSend } from "react-icons/io";
import Messages from "./Messages";

const Sendinput = () => {
  return (
    <div className="relative gap-1 w-full h-full flex flex-col p-2">
      <div className="w-full h-[66vh] p-1 overflow-auto bg-black">
        <Messages />
      </div>
      <form className="w-full absolute bottom-0">
        <div className="w-[98%] h-[10vh] flex flex-row items-center justify-start gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full text-white font-bold "
          />
          <button className="btn btn-primary">
            <IoMdSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sendinput;
