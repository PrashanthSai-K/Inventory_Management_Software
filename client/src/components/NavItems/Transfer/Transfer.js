import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TransferPopup from "./TransferPopup";
import TransferCard from "./TransferCard";
import TrackTransfer from "./TrackTransfer";


const Transfer = () => {

  const [showTransferPopup, setTransferPopup] = useState(false);
  const [showTrackTransfer, setTrackTransfer] = useState(false);

  const onClose = () => {
    setTransferPopup(false);
    setTrackTransfer(false);
    // setTimeout(window.location.reload(), 4000);
    fetchTransferData();
  };

  const navigate = useNavigate();

  const { getUser, user } = useAuth();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    } else {
      getUser();
    }
  });

  const [transferData, setTransferData] = useState([]);

  async function fetchTransferData(){
    const result = await axios.get("http://localhost:4000/getTransferData")
                         .catch((error)=>console.log(error))
                         .then((response)=>setTransferData(response.data));
  }
  useEffect(()=>{
    fetchTransferData();
  },[])

  // console.log(transferData);

  const [message, setMessage] = useState(null);

  const clearMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    setTimeout(clearMessage, 3000);
  }, [message]);

  // const onSubmit =()=>{
  //   onClose()
  // }

  return (
    <>
      <div className="bg-white  overflow-x-auto overflow-y-auto border-gray-700 rounded-lg w-full">
        <div className="p-8">
        {message ? <div>{message}</div> : null}
          <div className="flex items-center justify-between	pt-4">
            <div className="text-2xl">Transfer Items :</div>
            <div className="flex gap-4">
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm h-10 py-2 px-4 rounded w-42"
              onClick={() => setTrackTransfer(true)}
            >
              Track Your Request
            </div>
            <div
              className="bg-blue-500 hover:bg-blue-700 text-white h-10 text-sm  py-2 px-4 rounded w-42"
              onClick={() => setTransferPopup(true)}
            >
              Request Transfer
            </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col gap-10">
            Pending request:
            {transferData && transferData.map((data)=>
               <TransferCard data={data} />
            )}
            
          </div>
        </div>

        <TransferPopup
          user={user}
          isVisible={showTransferPopup}
          onClose={onClose}
          setMessage = {setMessage}
        />

        <TrackTransfer 
          user={user}
          isVisible={showTrackTransfer}
          onClose={onClose}
        />

      </div>
    </>
  );
};

export default Transfer;
