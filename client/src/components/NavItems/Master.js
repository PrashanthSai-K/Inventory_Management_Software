import React from 'react'
import Cards from '../CommonPages/Cards'
import Table from '../CommonPages/Table'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Cookies from 'js-cookie';
import axios from 'axios';

function Master() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const { user, getUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const [stockData, setStockData] = useState([]);

  async function fetchStockData() {
    const response = await axios.get("http://localhost:4000/api/getAdminStockData");
    setStockData(response.data);
    // console.log(stockData);
  }


  
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    } else {
      getUser();
      fetchStockData();
    }  
  }, [Cookies.get("token"), stockData])

  useEffect(()=>{
    if(stockData.length > 0){
      setIsLoading(false);
    }
  }, [stockData]);


  return (
    <>
      {isLoading ? (
      <div className="flex justify-center items-center h-full">
        <span class="loader"></span>
      </div >
      ) : (
        <div>
          <h1 className="text-2xl font-semibold ">Master Page</h1>
          <div className="flex flex-col justify-center items-center gap-10 ">
            <center> <Cards /></center>
            <Table stockData={stockData}/>
          </div>
        </div>
      )}
    </>

  )
}

export default Master;