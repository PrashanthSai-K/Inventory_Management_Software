import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ItemEntry = () => {

    const [data, setData] = useState({ name: "", address: "", contact: "" });
    const navigate = useNavigate();
    const [manufacturer, setManufacturer] = useState([])
    const [supplier, setSupplier] = useState([]);

     async function  fetchManufacturer(){
      const response = await axios.get("http://localhost:4000/getManufacturer")
      setManufacturer(response.data);
    }
    async function fetchSupplier(){
      const response = await axios.get("http://localhost:4000/getSupplier")
      setSupplier(response.data);
    }

    useEffect(()=>{
      fetchManufacturer();
      fetchSupplier();
    },[])
    
  
    const handleChange = (e) => {
      e.preventDefault();
      setData({...data, [e.target.name]: e.target.value})
    };
  
    const HandleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios
        .post("http://localhost:4000/supplieradd", data)
        .catch((error) => console.log(error))
        .then(() => navigate("/"));
      console.log(data);
      setData({ name: "", address: "", contact: "" })
    };



  return (
    <>
        { manufacturer && supplier && 
          <form onChange={handleChange}>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Entry</span>
          <input
            type="text"
            name="name"
            value={data.name}
           
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Type</span>
          <input
            type="text"
            name="address"
            value={data.address}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Manufacturer Name</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            list='manufacturers'
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none " autoComplete='off'
          />
          <div>
            {manufacturer.map((manu)=>{
              return(
                <ul>
                  <li>
                <option value={manu.id}>{manu.name}</option>  
                </li>
                </ul>
              )
            })}
            </div>
            <option><a href="">Click to add</a></option>
        </div>


        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Supplier Name</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            list='supplier'
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <datalist id='supplier'>
            {supplier.map((supp)=>{
              return(
                <option  value={supp.id}>{supp.name}</option>
              )
            })}
          </datalist>
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Name</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Sub-Name</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Spec-1</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Spec-2</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Item Spec-3</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Cost Per Item</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Quantity Units</span>
          
          <input
            type="text"
            name="contact"
            value={data.contact}
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
       
        </div>
        <button onClick={HandleSubmit}>Submit</button>
      </form>}
    </>
  )
}

export default ItemEntry