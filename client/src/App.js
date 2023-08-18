import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import ManufacturerEntry from "./CommonPages/ManufacturerEntry";
import Vendors from "./components/NavItems/Vendors";
// import SupplierEntry from "./CommonPages/SupplierEntry";
// import ItemEntry from "./CommonPages/ItemEntry";
// import StockEntry from "./CommonPages/StockEntry";
import Entries from "./components/NavItems/Entries";
import Master from "./components/NavItems/Master";
import Supplier from "./components/NavItems/Supplier";
import { React, useState } from "react";
import Dashboard from "./components/NavItems/Dashboard";
import Error404 from "./components/ErrorPages/Error404";
import LoginPage from "./components/CommonPages/LoginPage";
import RegisterPage from "./components/CommonPages/RegisterPage";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Graph from "./components/Graph";


function App() {
  const [open, setOpen] = useState(false);
  // const [navUsed, setNavUsed] =useState(false)
  const location = useLocation();



  const navItems = [
    { Name: "Dashboard", iconName: "bi-speedometer", src: "/dashboard" , color:"bg-transparent" ,role:"super"},
    { Name: "Master", iconName: "bi-file-person-fill", src: "/master" ,color:"bg-transparent" , role:"student"},
    { Name: "Supplier", iconName: "bi-archive-fill", src: "/supplier",color:"bg-transparent", role:"admin" },
    { Name: "Vendors", iconName: "bi-building", src: "/vendors" ,color:"bg-transparent" ,role:"admin" },
    { Name: "Entries", iconName: "bi-list-check", src: "/entries" ,color:"bg-transparent", role:"super" }
  ];
   


  const setNavState = () => {
      setOpen(open); 
  }
  
  function navUsed(){
    return navItems.some(item => item.src === location.pathname)
  }

  return (
    <>
      {navItems.map((navItem) => (
        navItem.src === location.pathname &&
        <div className={`${open ? "w-64" : "w-20"} h-screen bg-blue-800 w-1/6 fixed left-0 right-0 navbar duration-300`} >
          <img src="/images/control.png" alt=""
            className={`absolute -right-3   w-8 border-blue-800 border-2  rounded-full ${!open && "rotate-180"} `}
            style={{ top: "88px" }}
            onClick={() => setOpen(!open)}
          />

          <div className="flex gap-x-4  items-center ml-2 mt-10 font">
            <img src="/images/bit1.png" alt="" className={`duration-300 w-12  ${open && "rotate-[360deg]"}`} />
            <h1 className={`ml-2 mb-2.5 text-3xl pt-1 ${!open && "hidden"}`}>Stores {navUsed()}</h1>
          </div>
          <div className="mt-10 mr-2 h-screen" style={{ fontSize: "21px" }}>

            <ul>
              
              {navItems.map((nav) => (
                <a onClick={setNavState} data-Tooltip-id="my-tooltip" data-tooltip-content={nav.Name} href={nav.src}>
                  <li className={`flex gap-x-4 mb-4 cursor-pointer ${(location.pathname.split("/")[1] === nav.Name.toLocaleLowerCase()) ?  nav.color="bg-gray-700": ""}  rounded-full  ${nav.color} hover:bg-gray-700 pl-5 pt-1 pr-2 pb-2`}>
                    <i className={`bi ${nav.iconName} ${!open && "text-2xl text-center"} duration-300 `}></i>
                    <span className={` duration-300 ${!open && "hidden"}`}>{nav.Name}</span>
                    { !open &&
                      <Tooltip place="bottom"  id="my-tooltip" />}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>))
      }
        <div
        className={`h-screen flex-1 ${ navUsed() ? open ? "ml-64" : "ml-20" : ""} 
          duration-300`}
      >
        <Routes>
          <Route path="/*" element={<Error404 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/master" element={<Master />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/entries" element={<Entries />} />
          <Route path="/g" element={<Graph />} />
          {/* <Route path="/manufactureradd" element={<ManufacturerEntry />} /> */}
          {/* <Route path="/supplieradd" element={<SupplierEntry />} /> */}
          {/* <Route path="/itemadd" element={<ItemEntry />} /> */}
          {/* <Route path="/stockadd" element={<StockEntry />} /> */}
        </Routes>
      </div>
      
    </>
  );
}

export default App;
