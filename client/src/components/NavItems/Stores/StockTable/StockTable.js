import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StockPopup from "./StockPopup";
import StockEdit from "./StockEdit";

function StockTable({getStock,fetchGetStock}) {
  //For open popup
  const [stockOpenPopup, setStockOpenPopup] = useState(false);
  const [stockSelectedData, setStockSelectedData] = useState(null);

  const handleStockOpenPopup = (data) => {
    setStockSelectedData(data);
    setStockOpenPopup(true);
  };

  const handleStockClosePopup = (data) => {
    setStockSelectedData(data);
    setStockOpenPopup(null);
  };

  //for edit popup
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setEditData(data);
  };

  const handleCloseEdit = (data) => {
    setOpenEdit(false);
    // setEditData(null);
    fetchGetStock();
  };
  const onSubmit = () => {
    fetchGetStock();
    handleCloseEdit();
  };


  // Search functionality

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click || searchQuery == "") {
      const filteredResults = getStock.filter((item) => {
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
  }, [click, getStock, searchQuery]);

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

  // async function HandleDelete(stock_id){
  //   // e.preventDefault();
  //   // console.log(item_code)
  //   try {
  //     const response = await axios.post("http://localhost:4000/stockdelete", {stock_id:stock_id});
  //     // console.log();

  //   } catch (error) {
  //     console.log(error);
  //     console.log("Error deleting item.");
  //   }
  //   // window.location.reload();
  // };

  return (
    <div>
      <div style={{width:"90%"}} className=" flex ml-20 h-auto mt-5 mb-5 justify-between  font-semibold" >
        <div className="sub-titles text-2xl font-semibold">Stock Edit</div>
        <div className="flex input-field">
            <div className="h-auto">
              <input
                name="inputQuery"
                type="text"
                value={searchQuery}
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


      <div className="flex justify-center items-center flex-col">
        <div
          style={{ width: "90%", height: "30%", maxHeight: "300px" }}
          class="relative rounded-2xl overflow-x-auto overflow-y-auto scrollbar-none"
        >
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    <div onClick={() => sortData("stock_qty")}>Stock Qty</div>
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
                    <div onClick={() => sortData("created_at")}>Created At</div>
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
                    <div onClick={() => sortData("dept_id")}>Dept Id</div>
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
                    <div onClick={() => sortData("inventory_value")}>
                      Inventory Value
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
                    <div onClick={() => sortData("user_id")}>User Id</div>
                    <span
                      className={`bi bi-arrow-${
                        sortOrder === "asc" ? "up" : "down"
                      } ml-2`}
                    />
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
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data, index) => {
                return (
                  <tr
                    key={data.id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td scope="row" class="px-6 text-center py-4 ">
                      {index + 1}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.item_code}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.manufacturer_id}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.supplier_id}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.stock_qty}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.created_at}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.dept_id}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.inventory_value}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      {data.user_id}
                    </td>
                    <td class="px-6 py-4 text-center whitespace-nowrap">
                      <i
                        onClick={() => handleStockOpenPopup(data)}
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
      {stockOpenPopup && stockSelectedData && (
        <div className="blur-background">
          <StockPopup
            data={stockSelectedData}
            onClose={handleStockClosePopup}
          />
        </div>
      )}
      {openEdit && editData && (
        <div className="blur-background">
          <StockEdit
            data={editData}
            onClose={handleCloseEdit}
            onSubmit={onSubmit}
          />
        </div>
      )}
    </div>
  );
}

export default StockTable;
