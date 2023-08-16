import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Vendors from "./components/NavItems/Vendors";
import Entries from "./components/NavItems/Entries";
import Master from "./components/NavItems/Master";
import Supplier from "./components/NavItems/Supplier";
import { React, useEffect, useState, createContext } from "react";
import Dashboard from "./components/NavItems/Dashboard";
import Error404 from "./components/ErrorPages/Error404";
import Hover from "./components/Hover";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "./components/Navbar";
export const UserContext = createContext(null);

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
    { Name: "Logout", iconName: "bi-box-arrow-right" },
  ];

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  function navUsed() {
    return navItems.some((item) => item.src === location.pathname);
  }

  async function checkLogin() {
    if (Cookies.get("token")) {
      const token = Cookies.get("token");
      const result = await axios
        .post("http://localhost:4000/getUser", { token: token })
        .catch((error) => console.log(error));
    }
  }

  async function getUser() {
    const token = Cookies.get("token");
    const result = await axios
      .post("http://localhost:4000/getUser", { token: token })
      .catch((error) => console.log(error))
      .then((response) => setUser(response.data))
      .then(() => setIsLoggedin(true));
  }

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
      getUser();
    }
  }, []);

  return (
    <>
      <Navbar location = {location.pathname} logout={logout} open={open} setOpen={setOpen}  user={user}/>

      <div
        className={`h-screen flex-1 ${
          navUsed() ? (open ? "ml-64" : "ml-20") : ""
        } 
        duration-300`}
      >
        <GoogleOAuthProvider clientId="494572126295-g8ok8a5g0kvr3ceodj12h5orod5oe38v.apps.googleusercontent.com">
          <UserContext.Provider value={user}>
            <Routes>
              <Route path="/*" element={<Error404 />} />
              <Route path="/" element={<LoginPage getUser={getUser} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registerpage" element={<RegisterPage />} />
              <Route path="/master" element={<Master />} />
              <Route path="/supplier" element={<Supplier />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/entries" element={<Entries />} />
              <Route path="/page" element={<Error404 />} />
            </Routes>
          </UserContext.Provider>
        </GoogleOAuthProvider>
      </div>
    </>
  );
}



export default App;
