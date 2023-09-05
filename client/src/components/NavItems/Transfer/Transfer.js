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
  const [isLoading, setIsLoading] = useState(false);
  const [trackTransferData, setTrackTransferData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [noData, setNoData] = useState(false);



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
      getUser()
        .then((result) => {
          fetchTransferData(result);
          fetchTrackTransferData(result)
        })
        .catch((error) => console.log(error));
    }
  });

  console.log(user)

  useEffect(()=>{
    if(trackTransferData.length >0 && transferData.length > 0){
      setIsLoading(false);
    }
  })



  async function fetchTransferData(data) {
    try {

      const result = await axios.post("http://localhost:4000/api/getTransferData", data)
      if (result.status == 200) {
        if(result.data.data == "No Data"){
          setNoData(true);
          setIsLoading(false);
        }else{
          setTransferData(result.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }


  const [message, setMessage] = useState(null);

  const clearMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    setTimeout(clearMessage, 3000);
  }, [message]);

  async function fetchTrackTransferData(data) {

    try {
      // console.log(data)
      const response = await axios.post(
        "http://localhost:4000/api/getTrackTransfer", data
      );
      if (response.status == 200) {
        // console.log(response.data)
        setTrackTransferData(response.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {isLoading ? (
      <div className="flex justify-center items-center h-full"><span class="loader"></span></div>
      ) : (
        <div className="bg-white  overflow-x-auto overflow-y-auto border-gray-700 rounded-lg w-full">
          <div className="flex justify-between w-full">
            <div>{user.user_id}</div>
            <div>{user.dept_code}</div>
          </div>
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
              {noData ? <div>No Data</div> : ( 
              transferData && transferData.map((data) =>
                <TransferCard data={data} user={user} />
              )
              )}
            </div>
          </div>

          <TransferPopup
            user={user}
            isVisible={showTransferPopup}
            onClose={onClose}
            setMessage={setMessage}
          />

          <TrackTransfer
            user={user}
            trackTransferData={trackTransferData}
            isVisible={showTrackTransfer}
            onClose={onClose}

          />

        </div>
      )
      }
    </>

  );
};

export default Transfer;
