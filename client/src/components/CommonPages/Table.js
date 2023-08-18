import axios from "axios";
import React, { useState, useEffect } from "react";

function Table() {
  const [stockData, setStockData] = useState([]);

  async function fetchStockData() {
    const response = await axios.get("http://localhost:4000/getAdminStockData");
    setStockData(response.data);
    // console.log(stockData);
  }
  useEffect(() => {
    fetchStockData();
  });

  console.log(stockData);

  return (
    <div className="w-11/12 h-1/6">
      <div  style={{height:"490px"}} class="sm:-mx-6 lg:-mx-8 overflow-x-auto overflow-y-auto border-gray-700 rounded-lg bg-sky-800 ">
        <div class=" align-middle inline-block min-w-full  bg-blue-800">
          <div class="shadow overflow-hidden sm:rounded-lg    ">
            <table class="min-w-full text-sm text-gray-400 ">
              <thead class="bg-gray-800 text-xs uppercase font-medium">
                <tr>
                  <th></th>
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
                    Cost/Item
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Units
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Manufacturer Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Supplier Name
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Supplier Contact
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Inventory Value
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    Purchased By
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                     Dept Purchased
                  </th>
                </tr>
              </thead>
              <tbody class="bg-gray-800">
                {stockData && stockData.map((data, index) => {
                  return (
                    <tr class="bg-black bg-opacity-20">
                      <td class="pl-4">{index + 1}</td>
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
                        {data.cost_per_item}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.quantity_units}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.manufacturer_name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.supplier_name}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        {data.contact}
                      </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                        {data.stock_qty}
                      </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                        {data.inventory_value}
                      </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                        {data.user_id}
                      </td>
                      <td class=" px-6 py-4 whitespace-nowrap">
                        {data.dept_id}
                      </td>
                      </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
