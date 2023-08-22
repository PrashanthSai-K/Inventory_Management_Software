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
    const response = await axios.get("http://localhost:4000/getItems");
    setItemData(response.data);
    console.log(response.data);
  } 

  useEffect(() => {
    fetchItemData();
    // console.log(manufacturer);
  }, []);

  const onSubmit = () =>{
    fetchItemData();
    handleCloseEdit();
  }

  // async function HandleDelete(item_code){
  //   // e.preventDefault();
  //   // console.log(item_code)
  //   try {
  //     const response = await axios.post("http://localhost:4000/itemdelete", {item_code:item_code});
  //     // console.log();
      
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Error deleting item."); 
  //   }
  //   // window.location.reload();
  // };

  return (
    <div>
      <div className=" justify-center items-center flex flex-col gap-10 ">
        <div className="text-2xl font-semibold ">Item Table</div>
        <div
          style={{ width: "1000px", height: "400px" }}
          class="relative rounded-2xl overflow-x-auto overflow-y-auto "
        >
          <table class="w-96 text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  S.No
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  Item code
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  Item type
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  Item Name
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  Item Sub-Name
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  Item Spec1
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  item_spec2
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  item_spec3
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  manufacturer_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  quantity_units
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  supplier_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  cost_per_item
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider"></th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider"></th>
                {/* <th scope="col" class="px-6 py-3 text-left tracking-wider"></th> */}
              </tr>
            </thead>
            <tbody>
              {itemData &&
                itemData.map((data, index) => {
                  return (
                    <tr
                      key={data.id}
                      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td scope="row" class="px-6 py-4 ">
                        {index + 1}
                      </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        {data.item_code}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_type}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_subname}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_spec1}
                      </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        {data.item_spec2}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_spec3}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.manufacturer_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.quantity_units}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.supplier_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.cost_per_item}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <i
                          onClick={() => handleOpenPopup(data)}
                          className="bi bi-eye cursor-pointer"
                        ></i>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <i
                          onClick={() => handleOpenEdit(data)}
                          className="bi bi-pen cursor-pointer"
                        ></i>
                      </td>
                      {/* <td class="px-6 py-4 whitespace-nowrap">
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
