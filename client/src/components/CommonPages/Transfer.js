import React, { useEffect, useState } from "react";
import axios from "axios";

const Transfer = () => {
  const [data, setData] = useState({ itemcode: "", showStock: "" });

  const [item, setItem] = useState([]);
  const [stock, setStock] = useState([]);

  async function fetchItems() {
    const response = await axios.get("http://localhost:4000/getItems");
    setItem(response.data);
  }

  async function fetchStock() {
    const response = await axios.get("http://localhost:4000/getStock");
    setStock(response.data);
  }

  useEffect(() => {
    fetchItems();
    fetchStock();
  }, []);

  const [itemResult, setItemResult] = useState(item);
  const [suggestion, setSuggestion] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleItemChange = (e) => {
    if (e.target.value.trim().length > 0) {
      setSuggestion(true);
      setIsTyping(true);
    } else {
      setIsTyping(false);
      setSuggestion(false);
    }
    setItemResult(
      item.filter((f) => f.item_name.toLowerCase().includes(e.target.value))
    );
    setData({ ...data, [e.target.name]: e.target.value });
  };

  function resultClick(code) {
    setData({ ...data, itemcode: code });
    const result = item.filter((items) => {
      if (items.item_code == code) {
        return items;
      }
    });

    setSuggestion(false);
    setIsTyping(false);
  }

  const [result, setResult] = useState([]);
//   const [stockResult, setStockResult] = useState({});

  const handleReqFromChange = (e) => {
    e.preventDefault();
    setResult(
      stock.filter((f) =>
        f.dept_id.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    result.find(
      (res) => res.item_code.toLowerCase() == data.itemcode.toLowerCase()
    );
  };
  const checkAvailability = (e) => {
    e.preventDefault();
    const foundElement =
      result.find(
        (res) => res.item_code.toLowerCase() == data.itemcode.toLowerCase()
      )
    if (foundElement != null)
      setData({ ...data, showStock: foundElement.stock_qty });
    else 
      setData({ ...data, showStock: 0 });
  };

  return (
    <>
      <div
        style={{ width: "1000px", height: "600px" }}
        className="bg-white  overflow-x-auto overflow-y-auto border-gray-700 rounded-lg"
      >
        <div className="flex flex-col justify-center items-center">
          <div className="py-1 flex  pb-8 mt-8">
            <span className="px-1 text-2xl text-gray-600">
              Transfer Request
            </span>
          </div>
          <form>
            {/* {message ? <div>{message}</div>: null} */}
            <div className="py-1 flex mb-8 mt-8 gap-14">
              <span className="px-1 text-lg text-gray-600">Item Name</span>
              <input
                type="text"
                name="itemcode"
                list="itemcode"
                value={data.itemcode}
                onChange={handleItemChange}
                className="text-md block px-3 py-2 rounded-lg w-80 border-b-0
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                autoComplete="off"
              />
            </div>
            <div style={{ paddingLeft: "205px" }}>
              {isTyping && suggestion && (
                <div
                  className="text-md block px-3 py-2 rounded-b-lg w-80 border-t-0
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                >
                  {itemResult &&
                    itemResult.slice(0, 2).map((result) => {
                      return (
                        <div
                          key={result.item_code}
                          value={result.item_code}
                          className="hover:bg-sky-100 rounded-lg"
                          onClick={() => resultClick(result.item_code)}
                        >
                          {result.item_code}-{result.item_name}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
            <div style={{ gap: "38px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Request From</span>
              <input
                type="text"
                name="cost"
                value={data.cost}
                onChange={handleReqFromChange}
                className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={checkAvailability}
              >
                Check avail
              </button>
            </div>
            <div style={{ gap: "35px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Stock Available</span>
              <input
                type="text"
                name="cost"
                value={data.showStock}
                className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "35px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Stock required</span>
              <input
                type="text"
                name="cost"
                value={data.cost}
                className="text-md block px-3 py-2 rounded-lg w-80
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                // required
              />
            </div>

            <center>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mb-10">
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};

export default Transfer;
