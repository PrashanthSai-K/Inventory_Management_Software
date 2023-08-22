import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  async function getUser() {
    try {
      const token = Cookies.get("token");
      const result = await axios.post("http://localhost:4000/getUser", {
        token: token,
      }).catch((error)=>console.log(error));
      setUser(result.data);
      return(user);
    } catch (error) {
      setIsLoggedIn(false);
    }
  }

  async function login(response) {
    const result = await axios
      .post("http://localhost:4000/loginUser", { res: response })
      .catch((error) => console.log(error))
      .then((response) => Cookies.set("token", response.data))
      .then(()=>setIsLoggedIn(true))
      .then(() => getUser())
      .then(() => navigate("/dashboard"));
  }

  function logout(){
    setIsLoggedIn(false);
    setUser([]);
    try {
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

//   console.log(user)

  const value = {
    isLoggedIn,
    login,
    logout,
    getUser,
    user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
