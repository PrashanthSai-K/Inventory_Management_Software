import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function Supplier() {

  const navigate = useNavigate();
  const {user, getUser} =useAuth();
  
  useEffect(()=>{
    getUser();
  })
  if(!Cookies.get("token")){
    navigate("/");
  }

  return (
    <div>Supplier</div>
  )
}

export default Supplier