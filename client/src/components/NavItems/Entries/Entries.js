import React from "react";
import ManufacturerPopUp from "./Popups/ManufacturerPopUp";
import { useState, useEffect, useContext } from "react";
import SupplierPopUp from "./Popups/SupplierPopUp";
import StockPopUp from "./Popups/StockPopUp";
import ItemPopUp from "./Popups/ItemPopUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import Cookies from "js-cookie";
import axios from "axios";

function Entries() {

  const navigate = useNavigate();

  const { getUser, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  const [showManufacturer, setShowManufacturer] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [showSupplier, setShowSupplier] = useState(false);

  const [item, setItem] = useState([]);
  const [manufacturer, setManufacturer] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [quantityUnits, setQuantityUnits] = useState([]);
  

  async function fetchItems() {
    const response = await axios.get("http://localhost:4000/api/getItems");
    setItem(response.data);
  }

  async function fetchManufacturer() {
    const response = await axios.get("http://localhost:4000/api/getManufacturer");
    setManufacturer(response.data);
  }
  async function fetchSupplier() {
    const response = await axios.get("http://localhost:4000/api/getSupplier");
    setSupplier(response.data);
  }
  async function fetchQuantityUnits() {
    const response = await axios.get("http://localhost:4000/api/getQuantityUnits");
    setQuantityUnits(response.data);
  }



  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    } else {
      getUser();
      fetchItems();
      fetchManufacturer();
      fetchSupplier();
      fetchQuantityUnits();
    }
  }, []);

  useEffect(() => {
    if (item.length > 0 && manufacturer.length > 0 && supplier.length > 0 && quantityUnits.length > 0) {
      setIsLoading(false);
    }
  }, [item, supplier, manufacturer, quantityUnits]);

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const clearMessage = () => {
    setMessage(null);
    setError(null);
  };

  useEffect(() => {
    setTimeout(clearMessage, 4000);
  }, [message, error]);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full duration-800 ">
          <span class="loader animate-bounce duration-800"></span>
          Loading
        </div >
      ) : (
        <div style={{ backgroundColor: "#F4F4F4" }} className="flex h-full justify-center items-center">
          {message ? (
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded  fixed z-50 top-0 message" role="alert">
              <span class="block sm:inline">{message}</span>
            </div>
          ) : null}
          {error ? (
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded fixed top-0 z-50 " role="alert">
              <span class="block sm:inline">{error}</span>
            </div>
          ) : null}

          <div className="entries-gap-adjust animate1 flex mt-10 gap-36 w-full flex-wrap justify-center items-center ">
            <div
              onClick={() => setShowManufacturer(true)}
              className="w-96 h-52 mx-4 shadow-2xl bg-white rounded-3xl text-2xl animate hover:cursor-pointer text-black flex justify-center items-center"
            >

              <img className="w-40" src="/images/manu.png" alt="" />
              <div className="flex gap-2 flex-col">
                <div className="text-lg font-bold">Manufacturer Entry</div>
                <div style={{ color: "#5e9ff2" }} className="text-sm w-44 break-words ">Streamline Manufacturer Data Entry Process.</div>


              </div>
            </div>
            <ManufacturerPopUp
              isVisible={showManufacturer}
              onClose={() => setShowManufacturer(false)}
              setMessage={setMessage}
              setError={setError}
              setIsLoading={setIsLoading}
            />
            <div
              onClick={() => setShowSupplier(true)}
              className="w-96 h-52 mx-4 shadow-2xl animate1 bg-white rounded-3xl text-2xl  hover:cursor-pointer animate flex text-black justify-center items-center"
            >
              <img className="w-40" src="/images/supplierentry.png" alt="" />
              <div className="flex gap-2 flex-col">
                <div className="text-lg font-bold">Supplier Entry</div>
                <div style={{ color: "#5e9ff2" }} className="text-sm w-44 break-words ">Efficient Supplier Data Entry Process.</div>
              </div>
            </div>
            <SupplierPopUp
              isVisible={showSupplier}
              onClose={() => setShowSupplier(false)}
              setMessage={setMessage}
              setError={setError}
              setIsLoading={setIsLoading}
            />

            {/* {user.role === "slbincharge" && (
              <> */}
            <div
              onClick={() => {
                setShowItem(true)
              }}
              className="w-96 h-52 mx-4 shadow-2xl bg-white animate2 rounded-3xl flex text-2xl animate hover:cursor-pointer text-black justify-center items-center "
            >
              <img className="w-36" src="/images/item.png" alt="" />
              <div className="pl-2 flex gap-2 flex-col">
                <div className="text-lg font-bold">Item Entry</div>
                <div style={{ color: "#5e9ff2" }} className="text-sm w-40 break-words ">Optimize Item Data Entry Process. </div>
              </div>
            </div>
            <ItemPopUp
              isVisible={showItem}
              user={user}
              setMessage={setMessage}
              setError={setError}
              onClose={() => setShowItem(false)}
              setIsLoading={setIsLoading}
              manufacturer={manufacturer}
              supplier={supplier}
              quantityUnits={quantityUnits}
            />
            {/* </>
            )} */}


            <div
              onClick={() => setShowStock(true)}
              className="w-96 h-52 mx-4  shadow-2xl bg-white  animate2 rounded-3xl text-2xl animate hover:cursor-pointer flex text-black justify-center items-center"
            >
              <img className="w-40" src="/images/stockentry.png" alt="" />
              <div className="flex gap-2 flex-col pl-2">
                <div className="text-lg font-bold">Stock Entry</div>
                <div style={{ color: "#5e9ff2" }} className="text-sm w-40 break-words ">Simplify Stock Data Entry Process. </div>
              </div>
            </div>
            <StockPopUp
              isVisible={showStock}
              user={user}
              setMessage={setMessage}
              setError={setError}
              onClose={() => setShowStock(false)}
              setIsLoading={setIsLoading}
              item={item}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Entries;
