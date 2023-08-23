import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";

const TrackTransfer = ({ isVisible, onClose, trackTransferData }) => {


  // console.log("transfer data" ,trackTransferData)

  if (!isVisible) return null;

  return (

    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center lg:w-full ">
        <div className="bg-white w-9/12 h-96 overflow-y-auto rounded-2xl p-4">
          <div className="flex items-center justify-between px-6">
            <div className="text-lg pt-2 mt-2">Your Pending Requests: </div>
            <button
              className="text-black text-lg border-2 border-black px-2 place-self-end"
              style={{ borderRadius: "50%" }}
              onClick={() => onClose()}
            >
              X
            </button>
          </div>
          <div>
            <div className="mt-6 flex flex-col justify-center items-center gap-10">
              {trackTransferData && trackTransferData.map((data, index) => {
                return (
                  <div className="relative track-card w-11/12 rounded-xl">
                    {/* <div class="pl-4">{index + 1}</div> */}
                    <div className="flex flex-wrap">
                      <div class="px-6 py-4 whitespace-nowrap">Item Code:{data.item_code}</div>
                      <div class="px-6 py-4 whitespace-nowrap">Item Type:{data.item_type}</div>
                      <div class="px-6 py-4 whitespace-nowrap">Item Name:{data.item_name}</div>

                    </div>
                    <div className="flex flex-wrap">
                      <div class="px-6 py-4 whitespace-nowrap">Item Subname: {data.item_subname}</div>
                      <div class="px-6 py-4 whitespace-nowrap">Item Spec: {data.item_spec1} {data.item_spec2}</div>
                      <div class="px-6 py-4 whitespace-nowrap">Requested From: {data.transfered_from}</div>
                      <div class="px-6 py-4 whitespace-nowrap">Transfer Quantity: {data.transfer_qty}</div>
                    </div>
                    <div className="flex flex-wrap">
                      <div class="px-6 py-4 whitespace-nowrap">Cost Per Item : {data.cost_per_item}</div>
                      <div class="px-6 py-4 ">Status : {data.status}</div>
                      <button>Cancel</button>
                    </div>
                  </div >
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackTransfer;
