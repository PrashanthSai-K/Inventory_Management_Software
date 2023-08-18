import "./App.css";

// import ManufacturerEntry from "./CommonPages/ManufacturerEntry";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Vendors from "./components/NavItems/Vendors";
import Entries from "./components/NavItems/Entries";
import Master from "./components/NavItems/Master";
import Supplier from "./components/NavItems/Supplier";
import { React, useState,useEffect } from "react";

import Dashboard from "./components/NavItems/Dashboard";
import Error404 from "./components/ErrorPages/Error404";
import Hover from "./components/Hover";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Graph from "./components/Graph";
// import PrivateRoute from "./PrivateRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthContext";
import Stores from "./components/Stores/Stores";

function App() {
  const [open, setOpen] = useState(false);

  const [isloggedin, setIsLoggedin] = useState(false);

  const location = useLocation();

  const navItems = [
    { Name: "Dashboard", iconName: "bi-speedometer", src: "/dashboard" },
    { Name: "Master", iconName: "bi-file-person-fill", src: "/master" },
    { Name: "Supplier", iconName: "bi-archive-fill", src: "/supplier" },
    { Name: "Vendors", iconName: "bi-building", src: "/vendors" },
    { Name: "Entries", iconName: "bi-list-check", src: "/entries" },
    { Name: "Stores", iconName: "bi-list-check", src: "/stores" },
    { Name: "Logout", iconName: "bi-box-arrow-right" },
  ];

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  function navUsed() {
    return navItems.some((item) => item.src === location.pathname);
  }

  // async function getUser() {
  //   try{
  //   const token = Cookies.get("token");
  //   const result = await axios.post("http://localhost:4000/getUser", { token: token });
  //   setUser(result.data);
  //   setUser((data)=>({...data, loggedin:true}))
  //   }catch(error){
  //     setIsLoggedin(false);
  //   }
  // }

  // console.log(user)

  const logout = async () => {
    setIsLoggedin(false);
    setUser([]);
    try {
      Cookies.remove("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    if (Cookies.get("token")) {
      // getUser();
    }
  }, []);



  return (
    <>
   
      <Navbar
        location={location.pathname}
        logout={logout}
        open={open}
        setOpen={setOpen}
        user={user}
        isloggedin={isloggedin}
      />

      <div
        className={`h-screen flex-1 ${
          navUsed() ? (open ? "ml-64" : "ml-20") : ""
        } 
        duration-300`}
      >
        <GoogleOAuthProvider clientId="494572126295-g8ok8a5g0kvr3ceodj12h5orod5oe38v.apps.googleusercontent.com">
          
            <Routes>
              <Route path="/*" element={<Error404 />} />
              <Route
                path="/"
                element={
                  
                    <LoginPage />
                  
                }
              />
              <Route
                path="/dashboard"
                element={<Dashboard isloggedin={isloggedin} />}
              />
              <Route path="/registerpage" element={<RegisterPage />} />
              <Route
                path="/master"
                element={<Master isloggedin={isloggedin}/>}
              />
              <Route
                path="/supplier"
                element={<Supplier isloggedin={isloggedin} />}
              />
              <Route
                path="/vendors"
                element={<Vendors isloggedin={isloggedin} />}
              />
              <Route
                path="/stores"
                element={<Stores isloggedin={isloggedin} />}
              />
              <Route
                path="/entries"
                element={<Entries isloggedin={isloggedin} />}
              />
              {/* <Route path="/page" element={<Error404 />} /> */}
            </Routes>
        </GoogleOAuthProvider>
      </div>

    </>
  );
}

export default App;
