import React from "react";
import ManufacturerPopUp from "./Popups/ManufacturerPopUp";
import { useState, useEffect, useContext } from "react";
import SupplierPopUp from "./Popups/SupplierPopUp";
import StockPopUp from "./Popups/StockPopUp";
import ItemPopUp from "./Popups/ItemPopUp";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../AuthContext";
import Cookies from "js-cookie";

function Entries() {
  
  const navigate = useNavigate();

  const { getUser, user } = useAuth();

  const [showManufacturer, setShowManufacturer] = useState(false);
  const [showItem, setShowItem] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [showSupplier, setShowSupplier] = useState(false);

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    } else {
      getUser();
    }
  });

  return (
    <>
      {user.role}
      <div className="flex justify-center items-center">
        <div
          style={{ width: "1100px" }}
          className="flex gap-16 flex-wrap justify-center items-center "
        >
          <div
            onClick={() => setShowManufacturer(true)}
            style={{ backgroundColor: "#080F34" }}
            className="w-96 h-52 mr-14 rounded-3xl mt-32 text-2xl hover:cursor-pointer text-white flex justify-center items-center "
          >
            <div>Manufacturer Entry</div>
          </div>
          <ManufacturerPopUp
            isVisible={showManufacturer}
            onClose={() => setShowManufacturer(false)}
          />
          <div
            onClick={() => setShowSupplier(true)}
            style={{ backgroundColor: "#080F34" }}
            className="w-96 h-52 rounded-3xl mt-32 text-2xl   hover:cursor-pointer flex text-white justify-center items-center "
          >
            <div>Supplier Entry</div>
          </div>
          <SupplierPopUp
            isVisible={showSupplier}
            onClose={() => setShowSupplier(false)}
          />
          <div
            onClick={() => setShowStock(true)}
            style={{ backgroundColor: "#080F34" }}
            className="w-96 h-52 mr-14 rounded-3xl text-2xl  hover:cursor-pointer flex text-white justify-center items-center "
          >
            <div> Stock Entry</div>
          </div>
          <StockPopUp
            isVisible={showStock}
            onClose={() => setShowStock(false)}
          />
          {user.role === "slsincharge" && (
            <>
              <div
                onClick={() => setShowItem(true)}
                style={{ backgroundColor: "#080F34" }}
                className="w-96 h-52 rounded-3xl flex text-2xl  hover:cursor-pointer text-white justify-center items-center "
              >
                <div>Item Entry</div>
              </div>
              <ItemPopUp
                isVisible={showItem}
                onClose={() => setShowItem(false)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Entries;
