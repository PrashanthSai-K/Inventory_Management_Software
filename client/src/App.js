import "./App.css";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Vendors from "./components/NavItems/Vendors";
import Entries from "./components/NavItems/Entries/Entries";
import Master from "./components/NavItems/Master";
import Supplier from "./components/NavItems/Supplier";
import { React, useState, useEffect } from "react";

import Dashboard from "./components/NavItems/Dashboard";
import Error404 from "./components/ErrorPages/Error404";

import LoginPage from "./components/LoginPage";
import Graph from "./components/Graph";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Cookies from "js-cookie";
import Navbar from "./components/Navbar";
import Stores from "./components/NavItems/Stores/Stores";
import Unauthorized from "./components/ErrorPages/Unauthorized";
import Transfer from "./components/NavItems/Transfer/Transfer.js";
import { useAuth } from "./AuthContext";

function App() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate("/");
    } else {
      getUser();
    }
  }, []);

  const { user, getUser } = useAuth();


  const navItems = [

    { Name: "Dashboard", iconName: "bi-speedometer", src: "/dashboard" },
    { Name: "Master", iconName: "bi-file-person-fill", src: "/master" },
    // { Name: "Supplier", iconName: "bi-archive-fill", src: "/supplier" },
    { Name: "Vendors", iconName: "bi-building", src: "/vendors" },
    { Name: "Entries", iconName: "bi-list-check", src: "/entries" },
    { Name: "Stores", iconName: "bi-shop", src: "/stores", role: "slsincharge" },
    { Name: "Transfer", iconName: "bi-arrow-left-right", src: "/transfer" },
    { Name: "Logout", iconName: "bi-box-arrow-right" },
  ];

  function navUsed() {
    return navItems.some((item) => item.src === location.pathname);
  }

  return (
    <>
      <Navbar
        location={location.pathname}
        navItems={navItems}
        open={open}
        setOpen={setOpen}
        user={user}
      />

      <div
        className={`h-screen flex-1 ${navUsed() ? (open ? "ml-64" : "ml-20") : ""
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
              element={<Dashboard />}
            />
            {/* <Route path="/registerpage" element={<RegisterPage />} /> */}
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
              element={<Vendors />}
            />
            <Route
              path="/transfer"
              element={<Transfer />}
            />
            <Route
              path="/stores"
              element={<Stores />}
            />
            <Route
              path="/entries"
              element={<Entries />}
            />
            <Route
              path="/g"
              element={<Graph />}
            />
            <Route
              path="/unauthorized"
              element={<Unauthorized />}
            />
          </Routes>

        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
