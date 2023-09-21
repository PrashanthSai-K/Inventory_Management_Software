import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InventoryPopup from './commonPopups/InventoryPopup';
import StockPopup from './commonPopups/StockPopup';
import ScarpPopup from './commonPopups/ScarpPopup';

function Cards() {


  const [TotalStockValueData, setTotalStockValueData] = useState();
  const [TotalScrapValueData, setTotalScrapValueData] = useState();
  const [TotalInventoryValueData, setTotalInventoryValueData] = useState();
  const [InventoryData, setInventoryData] = useState(false);
  const [StockData, setStockData] = useState(false);
  const [scrapData, setScrapData] = useState(false);
  const [getInventoryDatas, setGetInventoryDatas] = useState([]);
  const [getStockDatas, setGetStockDatas] = useState([]);
  const [getScrapDatas, setGetScrapDatas] = useState([]);
 

  const fetchTotalStockValueData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getTotalStockValueData');
      setTotalStockValueData(response.data[0].stock);
    } catch (error) {
      console.log(error)
    }
  }

  
  const fetchscrapValueData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getTotalScrapValueData');
      setTotalScrapValueData(response.data[0].name);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchTotalInventoryValueData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getTotalInventoryValueData');
      setTotalInventoryValueData(response.data[0].cost);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchgetStockDatas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getOverallLabsStock');
      setGetStockDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchgetInventoryDatas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getInventoryData');
      setGetInventoryDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchgetScrapDatas = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getScrapData');
      setGetScrapDatas(response.data);
    } catch (error) {
      console.error(error);
    }
  }

 

  useEffect(() => {
    fetchTotalStockValueData();
    fetchscrapValueData();
    fetchTotalInventoryValueData();
    fetchgetInventoryDatas();
    fetchgetStockDatas();
    fetchgetScrapDatas();
  }, [])




  return (
    <div className='w-full justify-center items-center '>
      <div className="items-center justify-center flex w-full gap-20 mt-8 scale-90 flex-wrap tablet:scale-100">
        <div
          className={`w-80 h-36 shadow-2xl bg-white rounded-3xl cursor-pointer flex tablet:h-40 animate1`}
          onClick={() => setStockData(true)}
        >
          <div className="flex w-1/2 items-center justify-around">
            <img
              src={`/images/stock.png`}
              alt=""
              className="h-3/4 w-3/4 pr-3"
            ></img>
          </div>
          <div className="flex flex-col h-full rounded-l-3xl w-1/2  items-center pr-14 justify-center gap-8">
            <div className="font-bold  text-lg whitespace-nowrap tablet:text-xl">
              No of stocks
            </div>
            <div style={{ color: "#5e9ff2" }}  className="card-amount-adjust text-2xl font-bold flex gap-2">
              {TotalStockValueData} <div>nos</div>
            </div>
          </div>
        </div>
        <div
          className={`w-80 h-36 shadow-2xl bg-white rounded-3xl cursor-pointer flex tablet:h-40 animate1`}
          onClick={() => setScrapData(true)}
        >
          <div className="flex w-1/2 items-center justify-around">
            <img
              src={`/images/item.png`}
              alt=""
              className="h-3/4 w-3/4 pr-3"
            ></img>
          </div>
          <div className="flex flex-col h-full rounded-l-3xl w-1/2  items-center pr-14 justify-center gap-8">
            <div className="font-bold  text-lg whitespace-nowrap tablet:text-xl">
              Scrap Values
            </div>
            <div style={{ color: "#5e9ff2" }}  className="card-amount-adjust text-2xl font-bold flex gap-2">
              Rs {TotalScrapValueData}
            </div>
          </div>
        </div>
        <div
          className="w-80 h-36 shadow-2xl bg-white rounded-3xl cursor-pointer flex tablet:h-40 animate1"
        >
          <div
            className={`w-80 h-36 shadow-2xl bg-white rounded-3xl  cursor-pointer flex tablet:h-40 animate1`}
            onClick={() => setInventoryData(true)}
          >
            <div className="flex w-1/2 items-center justify-around">
              <img
                src={`/images/inventory.png`}
                alt=""
                className="h-3/4 w-3/4 pr-3"
              ></img>
            </div>
            <div className="flex flex-col h-full rounded-l-3xl w-1/2  items-center pr-14 justify-center gap-8">
              <div className="font-bold  text-lg whitespace-nowrap tablet:text-xl">
                Inventory values
              </div>
              <div style={{ color: "#5e9ff2" }}  className="card-amount-adjust font-bold text-2xl flex gap-2">
                <div>Rs</div> {TotalInventoryValueData}
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <StockPopup isVisible={StockData} onClose={() => setStockData(false)} data={getStockDatas} />
      <InventoryPopup isVisible={InventoryData} onClose={() => setInventoryData(false)} data={getInventoryDatas} />
      <ScarpPopup isVisible={scrapData} onClose={() => setScrapData(false)} data={getScrapDatas} />
    </div>


  )
}

export default Cards