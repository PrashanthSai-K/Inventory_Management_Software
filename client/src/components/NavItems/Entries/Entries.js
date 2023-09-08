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
        <div className="flex justify-center items-center">
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

          <div className="entries-gap-adjust flex mt-10 gap-36 w-full flex-wrap justify-center items-center ">
            <div
              onClick={() => setShowManufacturer(true)}
              style={{ backgroundColor: "#080F34" }}
              className="w-96 h-52 mx-4 rounded-3xl text-2xl hover:cursor-pointer text-white flex justify-center items-center"
            >
              <div>Manufacturer Entry</div>
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
              style={{ backgroundColor: "#080F34" }}
              className="w-96 h-52 mx-4 rounded-3xl text-2xl  hover:cursor-pointer flex text-white justify-center items-center"
            >
              <div>Supplier Entry</div>
            </div>
            <SupplierPopUp
              isVisible={showSupplier}
              onClose={() => setShowSupplier(false)}
              setMessage={setMessage}
              setError={setError}
              setIsLoading={setIsLoading}
            />
            <div
              onClick={() => setShowStock(true)}
              style={{ backgroundColor: "#080F34" }}
              className="w-96 h-52 mx-4 rounded-3xl text-2xl  hover:cursor-pointer flex text-white justify-center items-center"
            >
              <div> Stock Entry</div>
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
            {/* {user.role === "slbincharge" && (
              <> */}
                <div
                  onClick={() => {
                    setShowItem(true)
                  }}
                  style={{ backgroundColor: "#080F34" }}
                  className="w-96 h-52 mx-4 rounded-3xl flex text-2xl  hover:cursor-pointer text-white justify-center items-center "
                >
                  <div>Item Entry</div>
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
          </div>
        </div>
      )}
    </>
  );
}

export default Entries;
