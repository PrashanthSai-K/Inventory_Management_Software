import React, { useEffect, useState } from "react";
import axios from "axios";

function StockEdit({ data, onClose, onSubmit }) {

  const [formData, setFormData] = useState({
    item_code: "",
    manufacturer_id: "",
    supplier_id: "",
    stock_qty: "",
    created_at: "",
    dept_id: "",
    inventory_value: "",
    user_id: "",
    stock_id: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  console.log(formData);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/stockEdit",
        formData
      );

      if (response.status == 200) {
        console.log(response);
        onClose();
      }
      // setMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="popup-overlay">
      <div className="popup-content ">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={HandleSubmit} className="flex flex-col gap-3">
          <input className="hidden" value={formData.stock_id} />
          <span className="px-1 text-center text-lg text-gray-600">stock table</span>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Item Code</label>
          </div>
          <input
            id="item_code"
            type="text"
            name="item_code"
            onChange={handleChange}
            value={formData.item_code}
            disabled
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Manufacturer Id</label>
          </div>
          <input
            type="text"
            name="manufacturer_id"
            onChange={handleChange}
            value={formData.manufacturer_id}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Supplier Id</label>
          </div>
          <input
            type="text"
            name="supplier_id"
            onChange={handleChange}
            value={formData.supplier_id}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Stock Qty</label>
          </div>
          <input
            type="text"
            name="stock_qty"
            onChange={handleChange}
            value={formData.stock_qty}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Created At</label>
          </div>
          <input
            type="text"
            name="created_at"
            onChange={handleChange}
            value={formData.created_at}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Dept Id</label>
          </div>
          <input
            type="text"
            name="dept_id"
            onChange={handleChange}
            value={formData.dept_id}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">Inventory Value</label>
          </div>
          <input
            type="text"
            name="inventory_value"
            onChange={handleChange}
            value={formData.inventory_value}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold ">User Id</label>
          </div>
          <input
            type="text"
            name="user_id"
            onChange={handleChange}
            value={formData.user_id}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center">
          <button
            onClick={() => {
              // window.location.reload()
            }}
            className="border-2 w-1/2 rounded-lg py-1 border-black"
            type="submit"
          >
            submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StockEdit;
