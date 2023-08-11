import "./App.css";
import { Routes, Route } from "react-router-dom";
import ManufacturerEntry from "./components/ManufacturerEntry";
import Manufacturer from "./components/Manufacturer";
import SupplierEntry from "./components/SupplierEntry";
import ItemEntry from "./components/ItemEntry";
import Entries from "./components/Entries";
import Master from "./components/Master";
import Supplier from "./components/Supplier";
import {React,useState , useEffect }from "react";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


function App() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { Name: "Dashboard", iconName: "bi-speedometer", src:"/dashboard" },
    { Name: "Master", iconName: "bi-file-person-fill", src:"/master"},
    { Name: "Supplier", iconName: "bi-archive-fill",src:"/supplier" },
    { Name: "Manufacturer", iconName: "bi-building" , src:"/manufacturer" },
    { Name: "Entries", iconName: "bi-list-check" , src:"/entries" }];

const setNavState = ()=>{
  setOpen(open);
}

  return (
    <>
          <div className={`${open ? "w-64" : "w-20"} h-screen bg-blue-800 w-1/6 fixed left-0 right-0 navbar duration-300`} >
        <img src="/images/control.png" alt=""
          className={`absolute -right-3   w-8 border-blue-800 border-2  rounded-full ${!open && "rotate-180"} `}
          style={{ top: "88px" }}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4  items-center ml-2 mt-10 font">
          <img src="/images/bit1.png" alt="" className={`duration-300 w-12  ${open && "rotate-[360deg]"}`} />
          <h1 className={`ml-2 mb-2.5 text-3xl pt-1 ${!open && "hidden"}`}>Stores</h1>
        </div>
        <div className="mt-10 mr-2 h-screen" style={{ fontSize: "21px" }}>
          <ul>
            {navItems.map((nav) => (

              <a onClick={setNavState} href={nav.src}><li className="flex gap-x-4 mb-4 cursor-pointer hover:bg-gray-700 rounded-full  pl-5 pt-1 pr-2 pb-2">
                <i className={`bi ${nav.iconName} ${!open && "text-2xl text-center"} duration-300 `}></i>
                <span className={` duration-300 ${!open && "hidden"}`}>{nav.Name}</span>
              </li></a>

            ))}
          </ul>
        </div>
      </div>
      <div
        className={`h-screen flex-1 p-7 ${open ? "ml-64" : "ml-20"
          } duration-300`}
      >
        
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/master" element={<Master />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/manufactureradd" element={<ManufacturerEntry />} />
        <Route path="/supplieradd" element={<SupplierEntry />} />
        <Route path="/itemadd" element={<ItemEntry />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
