import { React} from 'react'
import { useState,useEffect } from 'react';
import Table from '../CommonPages/Table'
import axios from 'axios';
import Popup from './Popup';



function Stores() {

  const [openPopup, setOpenPopup] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // ... rest of your code ...

  // Handle opening the popup and setting the selected data
  const handleOpenPopup = (data) => {
    setSelectedData(data);
    setOpenPopup(true);
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setOpenPopup(false);
    setSelectedData(null);
  };


    const [open, setOpen] = useState(false);
    const [itemData, setItemData] = useState([]);
    

    async function fetchItemData() {
      const response = await axios.get("http://localhost:4000/getItems");
      setItemData(response.data);
      // console.log(stockData);
    }
    // console.log(itemData);

  const [getStock,setGetStock ] = useState([]);

  async function fetchGetStock() {
    const response = await axios
      .get("http://localhost:4000/getStock")
      .catch((error) => console.log(error));
      setGetStock(response.data);
  }
  // console.log(getStock);
  

  useEffect(() => {
    fetchItemData();
    fetchGetStock();
    // console.log(manufacturer);
  },[]);



  return (
    <>
    
    <div
        className={` gap-6 justify-center ${
          open ? "ml-64" : "mr-8"
        } duration-300`}
      >
        <div className=" justify-center items-center flex flex-col gap-10 ">
          <div className="text-2xl font-semibold ">Manufacturer</div>
          <div style={{width:"1000px",height:"400px"}}class="relative rounded-2xl overflow-x-auto overflow-y-auto ">
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
                    
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {itemData &&
                  itemData.map((data, index) => {
                    return (
                      <tr key={data.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                      <td class="px-6 py-4 whitespace-nowrap">
                      <i onClick={() => handleOpenPopup(data)} className="bi bi-eye cursor-pointer"></i>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      <i  className="bi bi-pen cursor-pointer"></i>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      <i className="bi bi-trash cursor-pointer"></i>
                      </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center items-center  flex-col gap-10">
          <div className="text-2xl mt-10 font-semibold ">Supplier</div>
          <div style={{width:"1000px",height:"400px"}}class="relative rounded-2xl overflow-x-auto overflow-y-auto ">
            <table class="w-96 text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                
                  </th>
                <th scope="col" class="px-6 py-3 text-left tracking-wider">
                stock_id
                  </th>
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
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    
                  </th>
                  <th scope="col" class="px-6 py-3 text-left tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {getStock &&
                  getStock.map((data, index) => {
                    return (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 ">
                          {index + 1}
                        </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                        {data.stock_id}
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
                      <i onClick={() => handleOpenPopup(data)} className="bi bi-eye cursor-pointer"></i>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      <i className="bi bi-pen cursor-pointer"></i> 
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                      <i className="bi bi-trash cursor-pointer"></i>
                      </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openPopup && selectedData && (
        <Popup data={selectedData} onClose={handleClosePopup} />
      )}

    </>

   

  )
}

export default Stores