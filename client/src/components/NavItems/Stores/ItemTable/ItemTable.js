import React from "react";
import ItemPopup from "./ItemPopup";
import { useState, useEffect } from "react";
import ItemEdit from "./ItemEdit";

function ItemTable({itemData , fetchItemData, setMessage, setError}) {
  //For open popup

  // console.log(itemData);
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

  const onSubmit = () => {
    fetchItemData();
    handleCloseEdit();
  };

  // Search functionality

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click || searchQuery == "") {
      const filteredResults = itemData.filter((item) => {
        const propertiesToSearch = [
          "item_name",
          "item_type",
          "item_code",
          "item_subname",
          "item_description",
          "manufacturer_id",
          "quantity_units",
          "supplier_id",
          "cost_per_item",
        ];
        return propertiesToSearch.some((property) =>
          typeof item[property] === "string"
            ? item[property].toLowerCase().includes(searchQuery.toLowerCase())
            : typeof item[property] === "number"
            ? item[property].toString().includes(searchQuery)
            : false
        );
      });

      setFilteredData(filteredResults);
    }
  }, [click, itemData, searchQuery]);

  //sort by functionality
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedColumn, setSortedColumn] = useState("");

  const sortData = (column) => {
    let newSortOrder = "asc";
    if (column === sortedColumn) {
      newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    }
    setSortOrder(newSortOrder);
    setSortedColumn(column);

    filteredData.sort((a, b) => { 
      // console.log(column);
      const valueA =
        typeof a[column] === "string" ? a[column].toLowerCase() : a[column];
      const valueB =
        typeof b[column] === "string" ? b[column].toLowerCase() : b[column];

      if (valueA < valueB) {
        return newSortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return newSortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // <-------------------------------search bar enter function---------------------------->

  const handleKeyEnter = (e) => {
    if(e.key === "Enter") {
      setClick(true);
    }
  };

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
// console.log(click);
  return (
    <div>
      <div className="titles text-3xl font-semibold py-4 pl-10">
        Item & Stock Management
      </div>
        <div style={{width:"90%"}} className="flex ml-20 h-auto mt-5 mb-5 justify-between font-semibold">
          <div className="sub-titles text-2xl font-semibold">Item Edit</div>
          <div className="flex input-field">
            <div className="h-auto">
              <input
                name="inputQuery"
                type="text"
                value={searchQuery}
                onKeyDown={handleKeyEnter}
                onChange={(e) => {
                  setClick(false);
                  setSearchQuery(e.target.value)}}
                placeholder="Search..."
                className="text-black indent-2 font-medium w-80 h-8 rounded-xl border-2 border-black"
              />
            </div>
            <div  
              onClick={() => setClick(true)}
              className="focus:ring-4 shadow-lg transform active:scale-75 transition-transform cursor-pointer border-2 border-black rounded-full w-full ml-5 px-2 mr-16"
            >
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
      <div className=" justify-center animate items-center flex flex-col ">
        <div
          style={{ width: "90%", height: "50%", maxHeight: "300px" }}
          className="table-design relative overflow-x-auto rounded-3xl overflow-y-auto scrollbar-thin scrollbar-none scrollbar-thumb-gray-400 scrollbar-track-gray-200"
        >
          <table className="w-full text-sm text-left text-gray-500  dark:text-gray-400 rounded-3xl ">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("item_code")}>Item Code</div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("item_type")}>Item Type</div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("item_name")}>Item Name</div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("item_subname")}>
                      Item Subname
                    </div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("item_description")}>
                      Item Description
                    </div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("manufacturer_id")}>
                      Manufacturer Id
                    </div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("quantity_units")}>
                      Quantity Units
                    </div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("supplier_id")}>
                      Supplier Id
                    </div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => sortData("cost_per_item")}>
                      Cost Per Item
                    </div>
                    <div
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    ></div>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left tracking-wider"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left tracking-wider"
                ></th>
                {/* <th scope="col" className="px-6 py-3 text-left tracking-wider"></th> */}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => (
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
                    {data.item_description}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && selectedData && (
        <div className="blur-background">
          <ItemPopup data={selectedData} onClose={handleClosePopup} />
        </div>
      )}

      {openEdit && editData && (
        <div className="blur-background">
          <ItemEdit
            data={editData}
            onClose={handleCloseEdit}
            onSubmit={onSubmit}
            setMessage={setMessage}
            setError={setError}
          />
        </div>
      )}
    </div>
  );
}

export default ItemTable;
