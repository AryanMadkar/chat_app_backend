import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [authorised, setAuthorised] = useState(true);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [otherusers, setotherusers] = useState([]);
  const [loginuser, setLoginuser] = useState([]);

  const getotherusers = async () => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get("http://localhost:5000/api/user");
      setotherusers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching other users");
    }
  };
  // useEffect(() => {
  //   getotherusers();
  // }, [authorised,user]);

  return (
    <ThemeContext.Provider
      value={{
        otherusers,
        authorised,
        setAuthorised,
        user,
        setUser,
        loginuser,
        setLoginuser,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
