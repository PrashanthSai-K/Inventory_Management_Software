import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SupplierPopUp = ({ isVisible, onClose }) => {

    const [data, setData] = useState({ name: "", address: "", contact: "" });
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    };
    const clearMessage =()=>{
        setMessage(null);
    }

    useEffect(()=>{
        setTimeout(clearMessage, 3000);
    },[message])



    const HandleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios
            .post("http://localhost:4000/api/supplieradd", data)
            .catch((error) => console.log(error))
            .then((response)=>setMessage(response.data));   
            // .then(() => navigate("/"));
        setData({ name: "", address: "", contact: "" })
    };
    if (!isVisible) return null;
    return (

        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className='flex flex-col'>
                <button className='text-white text-3xl place-self-end' onClick={() => onClose()}>X</button>
                <div style={{ width: "1000px", height: "600px" }} className='bg-white overflow-x-auto overflow-y-auto border-gray-700 rounded-lg'>
                    <div className="flex flex-col justify-center items-center">
                    <div class="py-1 flex  pb-8 mt-8">
                  <span class="px-1 text-2xl text-gray-600">Supplier Entry</span>
                </div>
                        <form onChange={handleChange}>
                        {message ? <div>{message}</div>: null}
                            <div class="py-1 flex pb-8 gap-14 mt-8">
                                <span class="px-1 text-lg text-gray-600">Supplier Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={data.name}

                                    className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <div style={{gap:"100px"}}  class="py-1 flex pb-8 ">
                                <span class="px-1 text-lg text-gray-600">Address</span>
                                <input
                                    type="text"
                                    name="address"
                                    value={data.address}

                                    className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <div style={{gap:"103px"}}  class="py-1 flex pb-8">
                                <span class="px-1 text-lg text-gray-600">Contact</span>
                                <input
                                    type="text"
                                    name="contact"
                                    value={data.contact}

                                    className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                />
                            </div>
                            <center>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mb-10' onClick={HandleSubmit}>Submit</button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SupplierPopUp