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
  const [isLoading, setIsLoading] = useState(true);
  const [trackTransferData, setTrackTransferData] = useState([]);
  const [transferData, setTransferData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);


  const onClose = () => {
    setTransferPopup(false);
    setTrackTransfer(false);
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
  }, [isLoading, message, error]);

  useEffect(() => {
    if (trackTransferData.length > 0 && transferData.length > 0) {
      setIsLoading(false);
    }
  })



  async function fetchTransferData(data) {
    try {

      const result = await axios.post("http://localhost:4000/api/getTransferData", data)
      if (result.status == 200) {
        if (result.data.data == "No Data") {
          setNoData(true);
          setIsLoading(false);
        } else {
          setTransferData(result.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }



  const clearMessage = () => {
    setMessage(null);
    setError(null);
  };

  useEffect(() => {
    setTimeout(clearMessage, 6000);
  }, [message, error]);

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
            {message ? (
              <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded  fixed z-50 top-0 message" role="alert">
                <span class="block sm:inline">{message}</span>
              </div>
            ) : null}
            {error ? (
              <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-0 z-50 message" role="alert">
                <span class="block sm:inline">{error}</span>
              </div>
            ) : null}
            <div className="flex flex-wrap gap-5 items-center justify-between	pt-4">
              <div className="text-2xl whitespace-nowrap">Transfer Items :</div>
              <div className="flex flex-wrap gap-5">
                <div
                  className="bg-blue-500 whitespace-nowrap hover:bg-blue-700 text-white text-sm h-10 py-2 px-4 rounded w-42"
                  onClick={() => setTrackTransfer(true)}
                >
                  Track Your Request
                </div>
                <div
                  className="bg-blue-500 whitespace-nowrap hover:bg-blue-700 text-white h-10 text-sm  py-2 px-6 rounded w-42"
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
                  <TransferCard setMessage={setMessage} setError={setError} data={data} user={user} />
                )
              )}
            </div>
          </div>

          <TransferPopup
            user={user}
            isVisible={showTransferPopup}
            onClose={onClose}
            setMessage={setMessage}
            setError={setError}
          />

          <TrackTransfer
            user={user}
            trackTransferData={trackTransferData}
            isVisible={showTrackTransfer}
            onClose={onClose}
            setError={setError}
            setMessage={setMessage}
          />

        </div>
      )}
    </>

  );
};

export default Transfer;
