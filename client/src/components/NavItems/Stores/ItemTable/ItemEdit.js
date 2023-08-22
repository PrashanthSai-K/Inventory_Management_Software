import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemEdit({ data, onClose , onSubmit}) {
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    item_code: "",
    item_type: "",
    item_name: "",
    item_subname: "",
    item_spec1: "",
    item_spec2: "",
    item_spec3: "",
    manufacturer_id: "",
    quantity_units: "",
    supplier_id: "",
    cost_per_item: "",
  });


  const clearMessage =()=>{
    setMessage(null);
}

useEffect(()=>{
    setTimeout(clearMessage, 3000);
},[message])


useEffect(() => {
  if (data) {
    setFormData(data);
  }
  // onSubmit();
}, [data]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const HandleSubmit = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/itemEdit", formData);
      
      if(response.status==200){
        console.log(response)
        onClose();
      }
    
    } catch (error) {
      console.log(error);
      setMessage("Error updating item."); 
    }
};

  // console.log(formData);  

  return (
    <div className="popup-overlay ">
      <div className="popup-content overflow-y-auto">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={HandleSubmit} className="flex flex-col gap-3">
          <span className="px-1 text-lg text-gray-600 text-center">Item Table</span>
          <div className="flex justify-center items-center ">
            <div className="w-40 flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Item Code</label>
          </div>
          <div>
          <input
            id="itemCode"
            type="text"
            name="item_code"
            onChange={handleChange}
            value={formData.item_code}
            disabled
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          </div> 
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Item Type</label>
          </div>
          <input
            type="text"
            name="item_type"
            onChange={handleChange}
            value={formData.item_type}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-4 font-bold">Item Name</label>
          </div>
          <input
            type="text"
            name="item_name"
            onChange={handleChange}
            value={formData.item_name}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg mr-4 font-bold">Item Subname</label>
          </div>
          <input
            type="text"
            name="item_subname"
            onChange={handleChange}
            value={formData.item_subname}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Item Spec1</label>
          </div>
          <input
            type="text"
            name="item_spec1"
            onChange={handleChange}
            value={formData.item_spec1}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Item Spec2</label>
          </div>
          <input
            type="text"
            name="item_spec2"
            onChange={handleChange}
            value={formData.item_spec2}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Item Spec3</label>
          </div>
          <input
            type="text"
            name="item_spec3"
            onChange={handleChange}
            value={formData.item_spec3}
            className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center ">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Manufacturer Id</label>
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
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Quantity Units</label>
          </div>
          <input
            type="text"
            name="quantity_units"
            onChange={handleChange}
            value={formData.quantity_units}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Supplier Id</label>
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
          <div className="flex justify-center items-center">
          <div className="w-40  flex justify-end">
          <label for="itemCode" className="text-lg pr-5 font-bold">Cost Per Item</label>
          </div>
          <input
            type="text"
            name="cost_per_item"
            onChange={handleChange}
            value={formData.cost_per_item}
            className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          </div>
          <div className="flex justify-center ">
          <button  className="border-2 border-black w-1/2 rounded-lg py-1 " type="submit">
            submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemEdit;
