import { React, useEffect, useState } from 'react'
import ItemTable from './ItemTable/ItemTable';
import StockTable from './StockTable/StockTable';
import axios from 'axios';



function Stores() {

  const [isLoading, setIsloading] = useState(true);

  //<----------------itemtable data-------------------->

  const [itemData, setItemData] = useState([]);
  async function fetchItemData() {
    const response = await axios.get("http://localhost:4000/api/getItems");
    setItemData(response.data);
    // console.log(response.data);
  }

  //<----------------itemtable data-------------------->

  const [getStock, setGetStock] = useState([]);
  async function fetchGetStock() {
    const response = await axios
      .get("http://localhost:4000/api/getStock")
      .catch((error) => console.log(error));
    setGetStock(response.data);
  }
  useEffect(() => {
    fetchGetStock();
    fetchItemData();
  }, []);

  useEffect(() => {
    if (getStock.length > 0 && itemData.length > 0) {
      setIsloading(false);
    }
  })

  return (
    <>
    <div
        className={`overflow-x-hidden gap-6 justify-center  duration-300 `}
      >
        <ItemTable itemData={itemData} fetchItemData={fetchItemData}/>
      
        <StockTable getStock={getStock} fetchGetStock={fetchGetStock}/>
        <br/> 
      </div>
    </>



  )
}

export default Stores