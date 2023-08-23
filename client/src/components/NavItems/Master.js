import React from 'react'
import Cards from '../CommonPages/Cards'
import Table from '../CommonPages/Table'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import Cookies from 'js-cookie';

function Master() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const {user, getUser} =useAuth();
  
  useEffect(()=>{
    getUser();
  })
  useEffect(()=>{
    if(!Cookies.get("token")){
      navigate("/");
    }else{
      getUser();
    }
  },[Cookies.get("token")])


  return (
    <>
      <div
        // className={` ${open ? "ml-64" : "ml-20"} duration-300`}
      >
        <h1 className="text-2xl font-semibold ">Master Page</h1>
        <div className="flex flex-col justify-center items-center gap-10 ">
         <center> <Cards /></center>
          {/* <div
            class={`flex flex-col mt-16 w-11/12 scale-90 tablet:scale-100 ${
              open && "scale-90 tablet:scale-100"
            }`}
          ></div> */}
           <Table /> 
        </div>  
         
      </div>
    </>

  )
}

export default Master