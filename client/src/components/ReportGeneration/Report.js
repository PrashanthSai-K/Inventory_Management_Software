import React, { useState, useEffect } from "react";
import axios from "axios";
import ReportGeneration from "./MasterTableReport/ReportGeneration";


function Report() {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [requiredData, setRequiredData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");
  const [viewColumn, setViewColumn] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({});
  // console.log(selectedTable);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "selectAll") {
      setSelectAll(checked);
      const updatedSelectedColumns = {};
      for (const key in selectedColumns) {
        updatedSelectedColumns[key] = checked;
      }
      setSelectedColumns(updatedSelectedColumns);
    } else {
      setSelectedColumns({
        ...selectedColumns,
        [name]: checked,
      });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getAdminStockData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    axios
      .get("http://localhost:4000/api/getItems")
      .then((response) => {
        setItemData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // console.log(itemData);

  const handleOkClick = () => {
    if (selectedTable === "masterTable") {
      const selectedData = data.map((item) => {
        const selectedItem = {};
        for (const key in selectedColumns) {
          if (selectedColumns[key]) {
            selectedItem[key] = item[key];
          }
        }
        return selectedItem;
      });
      setRequiredData(selectedData);
      
    }
    if (selectedTable === "itemTable") {
      const selectedData = itemData.map((item) => {
        const selectedItem = {};
        for (const key in selectedColumns) {
          if (selectedColumns[key]) {
            selectedItem[key] = item[key];
          }
        }
        return selectedItem;
      });
      setRequiredData(selectedData);
    }
  };


  const handleColumn = ()=>{
    if(selectedTable === "masterTable"){
      const masterData =  data.map(item => {
        const updatedItem = {};
        for (const key of Object.keys(item)) {
          updatedItem[key] = false;
        }
        return updatedItem;
      });
      const masterColumn = masterData[0];
      setSelectedColumns(masterColumn)
    }
    if(selectedTable === "itemTable"){
      console.log("true");
      const masterData =  itemData.map(item => {
        const updatedItem = {};
        for (const key of Object.keys(item)) {
          updatedItem[key] = false;
        }
        return updatedItem;
      });
      const masterColumn = masterData[0];
      setSelectedColumns(masterColumn)
    }
    setViewColumn(!viewColumn);
  }

  useEffect(()=>{
    
  },[])


  return (
    <div>
      <div className="w-full h-auto">
        <div className="flex justify-center h-56 rounded-2xl">
          <div className="border-black border-2">
            <div className="relative w-56 justify-center items-center flex flex-col inline-block text-left">
              <div>
                <select
                  value={selectedTable}
                  onChange={(e) => setSelectedTable(e.target.value)}
                  name="dropdown"
                  className=" w-36 py-2 " 
                >
                  <option value="selectTable" type="button" className=" ">
                    Select Table
                  </option>
                  <option value="masterTable" type="button" className=" ">
                    Master Table
                  </option>
                  <option value="itemTable" type="button" className=" ">
                    Item Table
                  </option>
                </select>

                <button
                  className="focus:ring-4 animate1 shadow-lg transform active:scale-75 transition-transform cursor-pointer border-2 rounded-lg ml-5 w-36 py-2 bg-blue-500 text-white mr-16"
                  type="button"
                  onClick={handleColumn}
                >
                  Show Options
                </button>
              </div>
              {(selectedTable === "masterTable" || selectedTable === "itemTable") && viewColumn === true && (
                <div
                  style={{ marginTop: "500px" }}
                  className="origin-top-right  absolute z-40 w-96"
                >
                  {/* {console.log("na vanthutanda")} */}
                  <div className="bg-white border border-gray-300 shadow-lg">
                    <div className="p-4">
                      <label className="block">
                        <input
                          type="checkbox"
                          name="selectAll"
                          checked={selectAll}
                          onChange={handleCheckboxChange}
                        />
                        Select All
                      </label>
                      {Object.keys(selectedColumns).map((key) => (
                        <label key={key} className="block">
                          <input
                            type="checkbox"
                            name={key}
                            checked={selectedColumns[key]}
                            onChange={handleCheckboxChange}
                          />
                          {/* {console.log(selectedColumns[key])} */}
                          {key}
                        </label>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          handleOkClick();
                          setViewColumn(false);
                        }}
                        className="mt-4 w-full border-black border-2 rounded-xl"
                      >
                        Preview Page
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <ReportGeneration data={data} requiredData={requiredData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
