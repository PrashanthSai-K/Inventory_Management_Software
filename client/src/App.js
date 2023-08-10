import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ManufacturerEntry from "./components/ManufacturerEntry";
import SupplierEntry from "./components/SupplierEntry";
import ItemEntry from "./components/ItemEntry";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manufactureradd" element={<ManufacturerEntry />} />
        <Route path="/supplieradd" element={<SupplierEntry />} />
        <Route path="/itemadd" element={<ItemEntry />} />
      </Routes>
    </>
  );
}

export default App;
