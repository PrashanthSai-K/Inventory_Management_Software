import React from "react";

function MasterTablePopup({ onClose, data }) {
  return (
    <div className=" popup-overlay">
      <div className=" popup-responsive popup-content">
        <div className="w-full text-end">
          <button
            className="rounded-full border-2 border-black px-2"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className=" text-lg gap-6">
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Item Code
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.item_code}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Item Type
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.item_type}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Item Name
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.item_name}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Item Subname
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.item_subname}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Item Description
            </div>
            :
            <div className="pl-5 whitespace-nowrap">
              {" "}
              {data.item_description}
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Cost Per Item
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.cost_per_item}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Quantity Units
            </div>
            :
            <div className="pl-5 whitespace-nowrap"> {data.quantity_units}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Manufacturer Name
            </div>
            :
            <div className="pl-5 whitespace-nowrap">
              {data.manufacturer_name}
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Supplier Name
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.supplier_name}</div>
          </div>

          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Supplier Contact
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.contact}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Stock Qty
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.stock_qty}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Inventory Value
            </div>
            :
            <div className="pl-5 whitespace-nowrap">
              {" "}
              {data.inventory_value}
            </div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Purchased By
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.user_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5 whitespace-nowrap ">
              Department Id
            </div>
            :<div className="pl-5 whitespace-nowrap"> {data.dept_id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasterTablePopup;
