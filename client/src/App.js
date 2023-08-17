import "./App.css";
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
import { React, useEffect, useState } from "react";
import Dashboard from "./components/NavItems/Dashboard";
import Error404 from "./components/ErrorPages/Error404";
import Hover from "./components/Hover";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from "axios";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthContext";
import Transfer from "./components/CommonPages/Transfer";

function App() {

  const [open, setOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { Name: "Dashboard", iconName: "bi-speedometer", src: "/dashboard" },
    { Name: "Master", iconName: "bi-file-person-fill", src: "/master" },
    { Name: "Supplier", iconName: "bi-archive-fill", src: "/supplier" },
    { Name: "Vendors", iconName: "bi-building", src: "/vendors" },
    { Name: "Entries", iconName: "bi-list-check", src: "/entries" },
    { Name: "Transfer", iconName:"bi-arrow-left-right", src:"/transfer"},
    { Name: "Logout", iconName: "bi-box-arrow-right" },
  ];

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  function navUsed() {
    return navItems.some((item) => item.src === location.pathname);
  }

  return (
    <>
   
      <Navbar
        location={location.pathname}
        navItems = {navItems}
        open={open}
        setOpen={setOpen}
        user={user}
        
      />

      <div
        className={`h-screen flex-1 ${
          navUsed() ? (open ? "ml-64" : "ml-20") : ""
        } 
        duration-300`}
      >
        <GoogleOAuthProvider clientId="494572126295-g8ok8a5g0kvr3ceodj12h5orod5oe38v.apps.googleusercontent.com">
          
            <Routes>
              <Route 
                path="/*" 
                element={<Error404 />} 
              />
              <Route
                path="/"
                element={<LoginPage />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard  />}
              />
              <Route path="/registerpage" element={<RegisterPage />} />
              <Route
                path="/master"
                element={<Master />}
              />
              <Route
                path="/supplier"
                element={<Supplier />}
              />
              <Route
                path="/vendors"
                element={<Vendors  />}
              />
              <Route
                path="/transfer"
                element={<Transfer  />}
              />
              <Route
                path="/entries"
                element={<Entries/>}
              />

            </Routes>
        </GoogleOAuthProvider>
      </div>

    </>
  );
}

export default App;
