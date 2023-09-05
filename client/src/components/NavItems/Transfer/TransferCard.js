import React,{useState} from "react";
import Lotties from "../../../Lotties/Lotties";
import Accept from "../../../Lotties/accept.json";
import Reject from "../../../Lotties/reject.json";
import axios from "axios";

const TransferCard = ({data, user}) => {

    const handleAccept = async(id)=>{

        try{
          // console.log(id)
          // console.log(user.user_id)
          const response = await axios.post("http://localhost:4000/api/acceptRequest", {transfer_id :id, user_id : user.user_id})
                          .then((response)=>console.log(response)) 
        }catch(error){
          console.log(error)
        }

      }
      const handleReject = async()=>{
        console.log("Rejected")
      }

  const toSentenceCase = (str)=>{
    str =str.toLowerCase().split(" ").map(function(s){
      return s.charAt(0).toUpperCase()+s.slice(1)
    })
    return str.join(" ")
  }
    
  return (
    <>
      <div className="card">
        <div className="p-3 flex items-center justify-between">
          <div>
            <div className="lg:text-lg">Requested By : {toSentenceCase(data.username)}</div>
            <div className="lg:text-lg ">
              Requested for: {toSentenceCase(data.request_labname)}({data.transfer_to})
            </div>
          </div>
          <div className="lg:flex gap-2">
            <Lotties
              animationData={Accept}
              height={50}
              width={50}
              click={handleAccept}
              clickData = {data.id}
            />
            <Lotties
              animationData={Reject}
              height={50}
              width={50}
              click={handleReject}
              clickData = {data.id}
            />
          </div>
        </div>
        <center>
          <div
            style={{ width: "95%" }}
            className="border-b-2 h-2 border-slate-300"
          ></div>
        </center>
        <div className="lg:flex card-sub" style={{ gap: "13%" }}>
          <div className="lg:text-sm p-6">
            <div className="">Item Name : {data.item_name}</div>
            <div className="pt-4">Item code : {data.item_code}</div>
          </div>
          <div className="text-sm p-6   ">
            <div>Item Subame : {data.item_subname}</div>
            <div className="pt-4">Item Desc : {data.item_description}</div>
          </div>
          <div className="text-sm p-6">
            <div>Transfer item From : {toSentenceCase(data.from_labname)}</div>
            <div className="pt-4">Transfer Qty : {data.transfer_qty}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferCard;
