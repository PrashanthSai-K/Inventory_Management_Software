import React, { useState, useEffect } from "react";
import axios from "axios";

const TrackCard = ({ data, onClose, user, setMessage, setError }) => {
  const [isLoading, setIsLoading] = useState(false);

    const handleCancel = async (e) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const response = await axios.post("http://localhost:4000/api/cancelTransferRequest",
                {
                    transfer_id: data.id,
                    dept_id: user.dept_code
                })
            if (response) {
                setIsLoading(false);
                setMessage(response.data.Data);
                console.log(response.data)
                onClose();
            }
        } catch (error) {
            if (error) {
                setIsLoading(false);
                setError(error.response.data.Data)
                console.error(error);
                onClose();
            }
        }
    }
  

  const handleDelete = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:4000/api/deleteTransferRequest",
        {
          transfer_id: data.id,
          dept_id: user.dept_code,
        }
      );
      if (response) {
        setIsLoading(false);
        setMessage(response.data.Data);
        console.log(response.data);
        onClose();
      }
    } catch (error) {
      if (error) {
        setIsLoading(false);
        setError(error.response.data.Data);
        console.error(error);
        onClose();
      }
    }
  };
  useEffect(()=>{
    console.log(data);
  })

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <span class="loader"></span>
        </div>
      ) : (
        <div className="relative track-card w-11/12 rounded-xl overflow-hidden p-10">
          <div className="flex flex-wrap items-center justify-evenly gap-3">
          <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Item Type</div>
                <div className="font-bold text-indigo-700">
                  {data.item_type}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Item Code</div>
                <div className="font-bold text-indigo-700">
                  {data.item_code}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Item Name</div>
                <div className="font-bold text-indigo-700">
                  {data.item_name}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Item Subname</div>
                <div className="font-bold text-indigo-700">
                  {data.item_subname}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Item Description</div>
                <div className="font-bold text-indigo-700">
                  {data.item_description}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Transfered From</div>
                <div className="font-bold text-indigo-700">
                  {data.transfered_from}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Cost Per Item</div>
                <div className="font-bold text-indigo-700">
                  {data.cost_per_item}
                </div>
              </div>
            </div>

            <div class="px-4 py-4 bg-indigo-100 rounded-lg flex gap-2">
              <i class="bi bi-person-circle pl-3 pr-3 pt-2 pb-3 bg-indigo-300 rounded-lg"></i>
              <div className="flex flex-col ">
                <div className="text-sm ">Status</div>
                <div className="font-bold text-indigo-700">
                  {data.status}
                </div>
              </div>
            </div>

            {/* <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Item Type{data.item_type}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Item Name{data.item_name}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Item Subname{data.item_subname}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Item Spec{data.item_description}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Requested From{data.transfered_from}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Transfer Quantity {data.transfer_qty}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Cost Per Item{data.cost_per_item}
            </div>
            <div class="px-6 py-4 bg-white border-2 border-black rounded-lg">
              Status{data.status}
            </div> */}
          </div>

          {data.status == "PENDING" ? (
            <button
              onClick={handleCancel}
              class="border border-red-500 h-10 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          ) : null}
          {data.status == "CANCELED" ? (
            <button
              onClick={handleDelete}
              class="border border-red-500 h-10 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          ) : null}
        </div>
      )}
    </>
  );
          }

export default TrackCard;
