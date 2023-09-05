import React from "react";
import ItemPopup from "./ItemPopup";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemEdit from "./ItemEdit";

function ItemTable() {
  
  //For open popup
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleOpenPopup = (data) => {
    setSelectedData(data);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedData(null);
  };
  //For edit popup

  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setEditData(data);
  };

  const handleCloseEdit = (data) => {
    setOpenEdit(false);
    // setEditData(null);
    fetchItemData();
  };

  const [itemData, setItemData] = useState([]);
  async function fetchItemData() {
    const response = await axios.get("http://localhost:4000/api/getItems");
    setItemData(response.data);
    console.log(response.data);
  } 

  useEffect(() => {
    fetchItemData();
  }, []);

  const onSubmit = () =>{
    fetchItemData();
    handleCloseEdit();
  }

  return (
    <div>
      <div className="text-3xl font-semibold py-4 pl-10">Item & Stock Management</div>
      <div className="text-2xl font-semibold py-4 pl-10">Item Edit</div>
      <div className=" justify-center items-center flex flex-col gap-10 ">
        <div
          style={{ width: "90%", height: "400px" }}
          className="relative  overflow-x-auto rounded-3xl overflow-y-auto scroll-smooth"
        >
          <table className="w-full text-sm text-left text-gray-500  dark:text-gray-400 rounded-3xl ">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Item code
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Item type
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Item Name
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Item Sub-Name
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  Item Spec1
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  item_spec2
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  item_spec3
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  manufacturer_id
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  quantity_units
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  supplier_id
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                  cost_per_item
                </th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider"></th>
                <th scope="col" className="px-6 py-3 text-left tracking-wider"></th>
                {/* <th scope="col" className="px-6 py-3 text-left tracking-wider"></th> */}
              </tr>
            </thead>
            <tbody>
              {itemData &&
                itemData.map((data, index) => {
                  return (
                    <tr
                      key={data.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td scope="row" className="px-6 py-4 ">
                        {index + 1}
                      </td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        {data.item_code}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.item_type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.item_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.item_subname}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.item_spec1}
                      </td>
                      <td className="flex px-6 py-4 whitespace-nowrap">
                        {data.item_spec2}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.item_spec3}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.manufacturer_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.quantity_units}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.supplier_id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {data.cost_per_item}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <i
                          onClick={() => handleOpenPopup(data)}
                          className="bi bi-eye cursor-pointer"
                        ></i>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <i
                          onClick={() => handleOpenEdit(data)}
                          className="bi bi-pen cursor-pointer"
                        ></i>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        <i className="bi bi-trash cursor-pointer"></i>
                      </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && selectedData && (
        <div className="blur-background">
          <ItemPopup data={selectedData} onClose={handleClosePopup}  />
        </div>
      )}

        {openEdit && editData && (
        <div className="blur-background">
          <ItemEdit data={editData} onClose={handleCloseEdit}  onSubmit={onSubmit}/>
        </div>
      )}
    </div>
  );
}

export default ItemTable;
