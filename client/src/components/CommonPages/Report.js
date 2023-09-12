import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportGeneration from "./ReportGeneration";

function Report() {
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({
    item_name: false,
    item_code: false,
    item_type: false,
    item_subname: false,
    item_description: false,
    cost_per_item: false,
    quantity_units: false,
    manufacturer_name: false,
    supplier_name: false,
    contact: false,
    stock_qty: false,
    inventory_value: false,
    user_id: false,
    dept_id: false,
  });
  const [requiredData, setRequiredData] = useState([]); // Store selected data here
  const [viewPdfViewer, setViewPdfViewer] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    // Fetch data from your server. Replace with your API endpoint.
    axios
      .get("http://localhost:4000/api/getAdminStockData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "selectAll") {
      setSelectAll(checked);
      const updatedSelectedColumns = {};
      for (const key in selectedColumns) {
        updatedSelectedColumns[key] = checked;
      }
      setSelectedColumns(updatedSelectedColumns);
    } else {
      // Update individual checkboxes
      setSelectedColumns({
        ...selectedColumns,
        [name]: checked,
      });
    }
  };

  const handleOkClick = () => {
    // Filter and store the selected data when the "OK" button is clicked
    const selectedData = data.map((item) => {
      const selectedItem = {};
      if (selectedColumns.item_name) {
        selectedItem.item_name = item.item_name;
      }
      if (selectedColumns.item_code) {
        selectedItem.item_code = item.item_code;
      }
      if (selectedColumns.item_type) {
        selectedItem.item_type = item.item_type;
      }
      if (selectedColumns.item_subname) {
        selectedItem.item_subname = item.item_subname;
      }
      if (selectedColumns.item_description) {
        selectedItem.item_description = item.item_description;
      }
      if (selectedColumns.cost_per_item) {
        selectedItem.cost_per_item = item.cost_per_item;
      }
      if (selectedColumns.quantity_units) {
        selectedItem.quantity_units = item.quantity_units;
      }
      if (selectedColumns.manufacturer_name) {
        selectedItem.manufacturer_name = item.manufacturer_name;
      }
      if (selectedColumns.supplier_name) {
        selectedItem.supplier_name = item.supplier_name;
      }
      if (selectedColumns.contact) {
        selectedItem.contact = item.contact;
      }
      if (selectedColumns.stock_qty) {
        selectedItem.stock_qty = item.stock_qty;
      }
      if (selectedColumns.inventory_value) {
        selectedItem.inventory_value = item.inventory_value;
      }
      if (selectedColumns.user_id) {
        selectedItem.user_id = item.user_id;
      }
      if (selectedColumns.dept_id) {
        selectedItem.dept_id = item.dept_id;
      }
      return selectedItem;
    });

    setRequiredData(selectedData);
    setViewPdfViewer(true); // Set a flag to indicate that "OK" was clicked
  };

  return (
    <div>
      <div className="w-100 h-auto flex flex-col pl-10 ">
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="selectAll"
            checked={selectAll}
            onChange={handleCheckboxChange}
          />
          Select All
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="item_code"
            checked={selectedColumns.item_code}
            onChange={handleCheckboxChange}
          />
          Item Code
        </label>
        <label className="flex items-center">
          <input 
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="item_type"
            checked={selectedColumns.item_type}
            onChange={handleCheckboxChange}
          />
          Item Type
          {/* {console.log(requiredData)} */}
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="item_name"
            checked={selectedColumns.item_name}
            onChange={handleCheckboxChange}
          />
          Item Name
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="item_subname"
            checked={selectedColumns.item_subname}
            onChange={handleCheckboxChange}
          />
          Item Subname
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="item_description"
            checked={selectedColumns.item_description}
            onChange={handleCheckboxChange}
          />
          Item Description
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="cost_per_item"
            checked={selectedColumns.cost_per_item}
            onChange={handleCheckboxChange}
          />
          Cost Per Item
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="quantity_units"
            checked={selectedColumns.quantity_units}
            onChange={handleCheckboxChange}
          />
          Quantity Units
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="manufacturer_name"
            checked={selectedColumns.manufacturer_name}
            onChange={handleCheckboxChange}
          />
          Manufacturer Name
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="supplier_name"
            checked={selectedColumns.supplier_name}
            onChange={handleCheckboxChange}
          />
          supplier_name
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="contact"
            checked={selectedColumns.contact}
            onChange={handleCheckboxChange}
          />
          Supplier Contact
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="stock_qty"
            checked={selectedColumns.stock_qty}
            onChange={handleCheckboxChange}
          />
          Stock Qty
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="inventory_value"
            checked={selectedColumns.inventory_value}
            onChange={handleCheckboxChange}
          />
          Inventory Value
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="user_id"
            checked={selectedColumns.user_id}
            onChange={handleCheckboxChange}
          />
          Purchased By
        </label>
        <label className="flex items-center">
          <input
            className="h-5 w-5 mr-3"
            type="checkbox"
            name="dept_id"
            checked={selectedColumns.dept_id}
            onChange={handleCheckboxChange}
          />
          Department Id
        </label>
        <button className="text-start border-black border-2 w-36 mt-3 items-center flex justify-center rounded-xl" onClick={handleOkClick}>click to select</button>
      </div>
      
      
      {<ReportGeneration data={requiredData} />}
    </div>
  );
}

export default Report;
