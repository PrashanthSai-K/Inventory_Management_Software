import React from "react";

function StockPopup({ data, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className=" text-xl gap-6 justify-center ">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Item Code</div>:
            <div className="pl-5"> {data.item_code}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Manufacturer Id</div>:
            <div className="pl-5"> {data.manufacturer_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Supplier Id</div>:
            <div className="pl-5"> {data.supplier_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Stock Id</div>:
            <div className="pl-5"> {data.stock_qty}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Created At</div>:
            <div className="pl-5"> {data.created_at}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Dept Id</div>:
            <div className="pl-5"> {data.dept_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">Inventory Value</div>:
            <div className="pl-5"> {data.inventory_value}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end mr-5 font-bold">User Id</div>:
            <div className="pl-5"> {data.user_id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockPopup;
