import React, { Fragment, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Cookies from "js-cookie";

function Dashboard() {
  
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { getUser, user, isLoggedIn } = useAuth();


  useEffect(() => {
    if(!Cookies.get("token")){
      navigate("/")
    }else{
      getUser();
    }
  });

  

  return (
    <>
      {user.user_name}
      <h1 className="text-2xl font-semibold ">Dashboard</h1>
      {user.length ? (
        <div className="text-2xl">
          {user.email_id},{user.role},{user.dept_code}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Dashboard;
