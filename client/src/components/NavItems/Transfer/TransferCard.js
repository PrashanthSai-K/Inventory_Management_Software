import React,{useState} from "react";
import Lotties from "../../../Lotties/Lotties";
import Accept from "../../../Lotties/accept.json";
import Reject from "../../../Lotties/reject.json";

const TransferCard = ({data}) => {

    const clickfunction = ()=>{
        console.log("Accepted")
      }
      const clickfunction2 = ()=>{
        console.log("Rejected")
      }
    
      const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: Accept,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    
      const [stopped, setStopped] = useState(true);

  const toSentenceCase = (str)=>{
    str =str.toLowerCase().split(" ").map(function(s){
      return s.charAt(0).toUpperCase()+s.slice(1)
    })
    return str.join(" ")
  }

  // console.log(toSentenceCase("hi and how are yo"));
      
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
              click={clickfunction}
            />
            <Lotties
              animationData={Reject}
              height={50}
              width={50}
              click={clickfunction2}
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
            <div>Item Subame : {data.item_subnam}</div>
            <div className="pt-4">Item Desc : {data.item_spec1} {data.item_spec2}</div>
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
