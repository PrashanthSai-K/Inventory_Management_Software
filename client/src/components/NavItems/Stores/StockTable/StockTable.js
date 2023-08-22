import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StockPopup from "./StockPopup";
import StockEdit from "./StockEdit";

function StockTable() {
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
  const onSubmit = () =>{
    fetchGetStock();
    handleCloseEdit();
  }

  const [getStock, setGetStock] = useState([]);
  async function fetchGetStock() {
    const response = await axios
      .get("http://localhost:4000/getStock")
      .catch((error) => console.log(error));
    setGetStock(response.data);
  }
  useEffect(() => {
    fetchGetStock();
  }, []);

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
      <div className="flex justify-center items-center  flex-col gap-10">
        <div className="text-2xl mt-10 font-semibold ">Stock Table</div>
        <div
          style={{ width: "1000px", height: "400px" }}
          class="relative rounded-2xl overflow-x-auto overflow-y-auto "
        >
          <table class="w-96 text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 text-left tracking-wider"></th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  item_code
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  manufacturer_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  supplier_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  stock_qty
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  created_at
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  dept_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  inventory_value
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                  user_id
                </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider"></th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider"></th>
                {/* <th scope="col" class="px-6 py-3 text-left tracking-wider"></th> */}
              </tr>
            </thead>
            <tbody>
              {getStock &&
                getStock.map((data, index) => {
                  return (
                    <tr key={data.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td scope="row" class="px-6 py-4 ">
                        {index + 1}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.item_code}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.manufacturer_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.supplier_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.stock_qty}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.created_at}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.dept_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.inventory_value}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.user_id}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
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
          <StockEdit data={editData} onClose={handleCloseEdit } onSubmit={onSubmit}/>
        </div>
      )}
    </div>
  );
}

export default StockTable;
