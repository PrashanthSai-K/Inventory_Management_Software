import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Cards() {
  

      const [TotalStockValueData , setTotalStockValueData ] = useState();
      const [TotalItemValueData , setTotalItemValueData ] = useState();
      const [TotalInventoryValueData , setTotalInventoryValueData ] = useState();

      const fetchTotalStockValueData = async() => {
        try{
          const response = await axios.get('http://localhost:4000/api/getTotalStockValueData');
          setTotalStockValueData(response.data[0].stock);
        }catch(error){
          console.log(error)
        }
      }

      const fetchItemValueData = async() => {
        try{
          const response = await axios.get('http://localhost:4000/api/getTotalItemValueData');
          setTotalItemValueData(response.data[0].name);
        }catch(error){
          console.log(error)
        }
      }
      
      const fetchTotalInventoryValueData= async() => {
        try{
          const response = await axios.get('http://localhost:4000/api/getTotalInventoryValueData');
          setTotalInventoryValueData(response.data[0].cost);
        }catch(error){
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchTotalStockValueData();
        fetchItemValueData();
        fetchTotalInventoryValueData();
      },[])


      const cards = [
        { src: "stock" , value:TotalStockValueData , topname:"No of stocks"},
        { src: "item" , value:TotalItemValueData , topname:"No of item"},
        { src: "inventory" ,value:TotalInventoryValueData , topname:"Inventory value"}
      ];


  return (
    <div className='w-full justify-center items-center animate2'>
         <div className="items-center justify-center flex w-full gap-20 mt-8 scale-90 flex-wrap tablet:scale-100">
            {cards.map((items) => (
              <div
                className={`w-80 h-36 shadow-2xl bg-white rounded-3xl  flex tablet:h-40`}
              >
                 <div className="flex w-1/2 items-center justify-around">
                  <img
                    src={`/images/${items.src}.png`}
                    alt=""
                    className="h-3/4 w-3/4"
                  ></img>
                </div>
                <div className="flex flex-col h-full rounded-l-3xl w-1/2  items-center pr-14 justify-center gap-8">
                  <div className="font-bold  text-lg whitespace-nowrap tablet:text-xl">
                   {items.topname}
                  </div>
                  <div className="card-amount-adjust font-bold text-3xl">
                    {items.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Cards