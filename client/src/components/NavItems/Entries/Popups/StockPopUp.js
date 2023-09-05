import { React, useState, useEffect } from "react";
import axios from "axios";

const StockPopUp = ({ isVisible, onClose, user, setMessage }) => {

  const [data, setData] = useState({
    itemcode: "",
    stock_qty: "",
    manufacturerId: "",
    supplierId: "",
    inventoryValue: "",
    userId: "12345",
    labCode: ""
  });

  const [autoForm, setAutoForm] = useState({});

  const [item, setItem] = useState([]);

  async function fetchItems() {
    const response = await axios.get("http://localhost:4000/api/getItems");
    setItem(response.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);


  const handleChange = (e) => {
    setData(e.target.value);
  };

  const HandleSubmit = async (e) => {

    try {

      e.preventDefault();
      const result = item.filter((items) => {
        if (items.item_code == data.itemcode) return items;
      });

      data.manufacturerId = result[0].manufacturer_id;
      data.supplierId = result[0].supplier_id;
      data.inventoryValue = result[0].cost_per_item * data.stock_qty;
      data.userId = user.user_id;

      const response = await axios
        .post("http://localhost:4000/api/stockadd", data)
        .then((response)=>{
          if(response && response.status == 200){
            setMessage(response.data.message)
          }
        })
        .then(() => {
          setData({
            itemcode: "",
            stock_qty: "",
            manufacturerId: "",
            supplierId: "",
            inventoryValue: "",
            userId: "",
            labCode: ""
          })
        })
        
      setAutoForm({});
      onClose();
    } catch (error) {
      console.log(error);
    }
  };


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

    setAutoForm(result[0]);
    setSuggestion(false);
    setIsTyping(false);
  }


  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col">
        <button
          className="text-white text-3xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div
          style={{ width: "1000px", height: "600px" }}
          className="bg-white overflow-x-auto overflow-y-auto flex flex-col items-center border-gray-700 rounded-lg"
        >
          <div class="py-1 flex  pb-8 mt-8">
            <span class="px-1 text-2xl text-gray-600">Stock Entry</span>
          </div>
          <form onSubmit={HandleSubmit}>
            <div className="py-1  " >
              <div className="flex" style={{ gap: "165px" }}>
                <span className="px-1 text-lg text-gray-600">
                  Item
                </span>
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
                      itemResult.slice(0, 4).map((result) => {
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
            </div>

            <div style={{ gap: "120px" }} class="py-1 flex pb-8 mt-5">
              <span class="px-1 text-lg text-gray-600">Item Name</span>
              <input
                type="text"
                name="subName"
                value={autoForm.item_name}
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "90px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Item Sub-Name</span>
              <input
                type="text"
                name="subName"
                value={autoForm.item_subname}
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "85px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Item Description</span>
              <input
                type="text"
                name="subName"
                value={autoForm.item_description}
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "120px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Item Type</span>
              <input
                type="text"
                name="subName"
                value={autoForm.item_type}
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "90px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Cost Per Item</span>
              <input
                type="text"
                name="subName"
                value={autoForm.cost_per_item}
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
                disabled
              />
            </div>
            <div style={{ gap: "90px" }} class="py-1 flex pb-8">
              <span class="px-1 text-lg text-gray-600">Lab Code</span>
              <input
                type="text"
                name="labCode"
                value={data.labCode}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                className="text-md block px-3 py-2 rounded-lg w-80 text-gray-500
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                required
              />
            </div>
            <div style={{ gap: "92px" }} class=" flex mt-2">
              <span class="px-1 text-lg text-gray-600">Stock Quantity</span>
              <input
                type="number"
                name="stock_qty"
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                value={data.stock_qty}
                required
                className="text-md block px-3 py-2 rounded-lg w-80 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
            </div>
            <center>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mb-10 mt-10"
                type="submit"
              >
                Submit
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StockPopUp;
