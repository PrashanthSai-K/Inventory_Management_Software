import React from "react";
import { useEffect, useState } from "react";
import StockPopup from "./StockPopup";
import StockEdit from "./StockEdit";

function StockTable({getStock , fetchGetStock, setMessage, setError, setIsLoading, isLoading}) {

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
          "inventory_value",
          "created_at",
          "item_code",
          "user_id",
          "dept_id",
          "manufacturer_id",
          "supplier_id",
          "stock_qty",
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
  const [sortOrders, setSortOrders] = useState({
    item_code: "asc",
    item_type: "asc",
    item_name: "asc",
    item_subname: "asc",
    item_description: "asc",
    manufacturer_id: "asc",
    quantity_units: "asc",
    supplier_id: "asc",
    cost_per_item: "asc",
  });
  
  const [sortedColumn, setSortedColumn] = useState("");

  const handleSort = (column) => {
    setSortOrders((prevSortOrders) => ({
      ...prevSortOrders,
      [column]: prevSortOrders[column] === "asc" ? "desc" : "asc",
    }));

    setSortedColumn(column);

    
    filteredData.sort((a, b) => {
      const valueA =
        typeof a[column] === "string" ? a[column].toLowerCase() : a[column];
      const valueB =
        typeof b[column] === "string" ? b[column].toLowerCase() : b[column];

      if (valueA < valueB) {
        return sortOrders[column] === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortOrders[column] === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredData(filteredData);
  };

  // <-------------------------------search bar enter function---------------------------->

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      setClick(true);
    }
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
      <div
        style={{ width: "90%" }}
        className=" flex ml-20 h-auto mt-5 mb-5 justify-between  font-semibold"
      >
        <div className="sub-titles text-2xl font-semibold">Stock Edit</div>
        <div className="flex input-field">
          <div className="h-auto">
            <input
              name="inputQuery"
              type="text"
              value={searchQuery}
              onKeyDown={handleKeyEnter}
              onChange={(e) => {
                setClick(false);
                setSearchQuery(e.target.value);
              }}
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
                    <div onClick={() => handleSort("item_code")}>Item Code</div>

                    {sortedColumn === "item_code" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.item_code === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("manufacturer_id")}>
                      Manufacturer Id
                    </div>
                    {sortedColumn === "manufacturer_id" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.manufacturer_id === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("supplier_id")}>
                      Supplier Id
                    </div>
                    {sortedColumn === "supplier_id" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.supplier_id === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("stock_qty")}>Stock Qty</div>
                    {sortedColumn === "stock_qty" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.stock_qty === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("created_at")}>Created At</div>
                    {sortedColumn === "created_at" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.created_at === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("dept_id")}>Dept Id</div>
                    {sortedColumn === "dept_id" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.dept_id === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("inventory_value")}>
                      Inventory Value
                    </div>
                    {sortedColumn === "inventory_value" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.inventory_value === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left whitespace-nowrap tracking-wider cursor-pointer"
                >
                  <div className="flex">
                    <div onClick={() => handleSort("user_id")}>User Id</div>
                    {sortedColumn === "user_id" && (
                      <span
                        className={`bi bi-arrow-${
                          sortOrders.user_id === "asc" ? "up" : "down"
                        } ml-2`}
                      />
                    )}
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
            setMessage={setMessage}
            setError={setError}
            setIsLoading ={setIsLoading}
            isLoading = {isLoading}
          />
        </div>
      )}
    </div>
  );
}

export default StockTable;
