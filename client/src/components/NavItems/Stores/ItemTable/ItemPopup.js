import React from 'react';

function ItemPopup({ data, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className=' text-xl gap-6'>
        <button className="close-button" onClick={onClose}>X</button>

        <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Code</div>:
            <div className="pl-5"> {data.item_code}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Type</div>:
            <div className="pl-5"> {data.item_type}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Name</div>:
            <div className="pl-5"> {data.item_name}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Subname</div>:
            <div className="pl-5"> {data.item_subname}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Spec1</div>:
            <div className="pl-5"> {data.item_spec1}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Spec2</div>:
            <div className="pl-5"> {data.item_spec2}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Item Spec3</div>:
            <div className="pl-5"> {data.item_spec3}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Manufacturer Id</div>:
            <div className="pl-5"> {data.manufacturer_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Quantity Units</div>:
            <div className="pl-5"> {data.quantity_units}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Supplier Id</div>:
            <div className="pl-5"> {data.supplier_id}</div>
          </div>
          <div className="w-full flex">
            <div className="w-36 flex justify-end font-bold mr-5">Cost_Per_Item</div>:
            <div className="pl-5"> {data.cost_per_item}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPopup;
