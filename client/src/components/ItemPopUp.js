import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemPopUp = ({ isVisible, onClose }) => {


    const [data, setData] = useState({ name: "", address: "", contact: "" });
    const navigate = useNavigate();
    const [manufacturer, setManufacturer] = useState([])
    const [supplier, setSupplier] = useState([]);

    async function fetchManufacturer() {
        const response = await axios.get("http://localhost:4000/getManufacturer")
        setManufacturer(response.data);
    }
    async function fetchSupplier() {
        const response = await axios.get("http://localhost:4000/getSupplier")
        setSupplier(response.data);
    }

    useEffect(() => {
        fetchManufacturer();
        fetchSupplier();

    }, [])


    const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
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

    if (!isVisible) return null;
    return (

        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='flex flex-col'>
                <button className='text-white text-3xl place-self-end' onClick={() => onClose()}>X</button>
                <div style={{ width: "1000px", height: "600px" }} className='bg-white overflow-x-auto overflow-y-auto border-gray-700 rounded-lg'>
                    <div className="flex flex-col justify-center items-center">
                        {manufacturer && supplier &&
                            <form onChange={handleChange}>
                                <div class="py-1 flex gap-20 pb-8 mt-8">
                                    <span class="px-1 text-sm text-gray-600">Item Entry</span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "85px" }} class="py-1 flex  pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Type</span>
                                    <input
                                        type="text"
                                        name="address"
                                        value={data.address}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "27px" }} class="py-1 flex  pb-8">
                                    <span class="px-1 text-sm text-gray-600">Manufacturer Name</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}
                                        list='manufacturers'
                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                    <datalist id='manufacturers' className='data-te-select-init'>
                                        {manufacturer.map((manu) => {
                                            return (
                                                <option value={manu.id}>{manu.name}</option>
                                            )
                                        })}
                                        <option><a href="">Click to add</a></option>
                                    </datalist>
                                </div>
                                <div style={{ gap: "57px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Supplier Name</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}
                                        list='supplier'
                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                    <datalist id='supplier'>
                                        {supplier.map((supp) => {
                                            return (
                                                <option value={supp.id}>{supp.name}</option>
                                            )
                                        })}
                                    </datalist>
                                </div>
                                <div style={{ gap: "77px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Name</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "52px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Sub-Name</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "71px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Spec-1</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "70px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Spec-2</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "70px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Item Spec-3</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "59px" }} class="py-1 flex pb-8">
                                    <span class="px-1 text-sm text-gray-600">Cost Per Item</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <div style={{ gap: "55px" }} class="py-1 flex  pb-8">
                                    <span class="px-1 text-sm text-gray-600">Quantity Units</span>
                                    <input
                                        type="text"
                                        name="contact"
                                        value={data.contact}

                                        className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                    />
                                </div>
                                <center>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mb-10 ' onClick={HandleSubmit}>Submit</button>
                                </center>
                            </form>


                        }
                    </div>


                </div>
            </div>

        </div>
    )
}

export default ItemPopUp