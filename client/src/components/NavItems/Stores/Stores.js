import { React, useEffect, useState} from 'react'
import ItemTable from './ItemTable/ItemTable';
import StockTable from './StockTable/StockTable';
import axios from 'axios';



function Stores() {

  //<----------------itemtable data-------------------->
  
  const [itemData, setItemData] = useState([]);
  async function fetchItemData() {
    const response = await axios.get("http://localhost:4000/getItems");
    setItemData(response.data);
    // console.log(response.data);
  }

 //<----------------itemtable data-------------------->
 
  const [getStock, setGetStock] = useState([]);
  async function fetchGetStock() {
    const response = await axios
      .get("http://localhost:4000/getStock")
      .catch((error) => console.log(error));
    setGetStock(response.data);
  }
  useEffect(() => {
    fetchGetStock();
    fetchItemData();
  }, []);

  return (
    <>
    <div
        className={` gap-6 justify-center  duration-300 `}
      >
        <ItemTable itemData={itemData} fetchItemData={fetchItemData}/>
      
        <StockTable getStock={getStock} fetchGetStock={fetchGetStock}/>
        <br/>
      </div>
    </>

   

  )
}

export default Stores