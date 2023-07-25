import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes , Route} from "react-router-dom";
import ManufacturerEntry from './components/ManufacturerEntry';
import SupplierEntry from './components/SupplierEntry';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/manufactureradd' element={<ManufacturerEntry />} />
    <Route path='/supplieradd' element={<SupplierEntry />} />
    </Routes>
    </>
  );
}

export default App;
