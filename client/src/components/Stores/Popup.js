import React from 'react';

function Popup({ data, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
       
        {/* Display the detailed information here */}
        <div className='flex text-xl gap-6'>
        <div> {data.item_code}</div>
        <div>{data.item_type}</div>
        <div>{data.item_name}</div>
        <div>{data.item_subname}</div>
        <div>{data.item_spec1}</div>
        <div>{data.stock_id}</div>
        <div>{data.manufacturer_id}</div>
        <div>{data.supplier_id}</div>
        <div>{data.stock_qty}</div>
        <div>{data.created_at}</div>
        <div>{data.dept_id}</div>
        <div>{data.inventory_value}</div>
        <div>{data.user_id}</div>
        <button className="close-button" onClick={onClose}>Close</button>
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default Popup;
