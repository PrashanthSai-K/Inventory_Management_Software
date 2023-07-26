import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SupplierEntry = () => {

  const [data, setData] = useState({ name: "", address: "", contact: "" });
  const navigate = useNavigate();

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
      <form onChange={handleChange}>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Supplier Name</span>
          <input
            type="text"
            name="name"
            value={data.name}
           
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Address</span>
          <input
            type="text"
            name="address"
            value={data.address}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="py-1">
          <span class="px-1 text-sm text-gray-600">Contact</span>
          <input
            type="text"
            name="contact"
            value={data.contact}
            
            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>

        <button onClick={HandleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default SupplierEntry;
