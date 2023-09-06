import React, { useEffect, useState } from "react";
import Cards from "../CommonPages/Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Cookies from "js-cookie";

function Vendors({ open }) {
  //<--------Creating required state variables---------->

  const [manufacturer, setManufacturer] = useState([]);
  const [supplier, setSupplier] = useState([]);

  //<-----End of creation of required state variables------>

  //<------Fetching data from api to render the page------->

  async function fetchManufacturer() {
    const response = await axios
      .get("http://localhost:4000/getManufacturer")
      .catch((error) => console.log(error));
    setManufacturer(response.data);
  }
  async function fetchSupplier() {
    const response = await axios
      .get("http://localhost:4000/getSupplier")
      .catch((error) => console.log(error));
    setSupplier(response.data);
  }

  useEffect(() => {
    fetchManufacturer();
    fetchSupplier();
  }, []);

  //<------------------- Search functionality for manufacturer table--------------------------->

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click || searchQuery == "") {
      const filteredResults = manufacturer.filter((item) => {
        const propertiesToSearch = ["name"];
        return propertiesToSearch.some((property) =>
          typeof item[property] === "string"
            ? item[property].toLowerCase().includes(searchQuery.toLowerCase())
            : typeof item[property] === "number"
            ? item[property].toString().includes(searchQuery)
            : false
        );
      });

      setFilteredData(filteredResults);
    }
  }, [click, manufacturer, searchQuery]);

  //<--------------------sort by functionality for manufacturer table-------------------->
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedColumn, setSortedColumn] = useState("");

  const sortData = (column) => {
    let newSortOrder = "asc";
    if (column === sortedColumn) {
      newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    }
    setSortOrder(newSortOrder);
    setSortedColumn(column);

    filteredData.sort((a, b) => {
      const valueA =
        typeof a[column] === "string" ? a[column].toLowerCase() : a[column];
      const valueB =
        typeof b[column] === "string" ? b[column].toLowerCase() : b[column];

      if (valueA < valueB) {
        return newSortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return newSortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  //<------------------- Search functionality for supplier table--------------------------->

  const [supplierSearchQuery, setSupplierSearchQuery] = useState("");
  const [supplierFilteredData, setSupplierFilteredData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {

    if (buttonClick || supplierSearchQuery == "") {
      const SupplierFilteredResults = supplier.filter((item) => {
        const supplierPropertiesToSearch = [
          "name",
          "address",
          "contact"
        ];
        return supplierPropertiesToSearch.some((property) =>
          typeof item[property] === "string"
            ? item[property]
                .toLowerCase()
                .includes(supplierSearchQuery.toLowerCase())
            : typeof item[property] === "number"
            ? item[property].toString().includes(supplierSearchQuery)
            : false
        );
      });

      setSupplierFilteredData(SupplierFilteredResults);
    }
  }, [buttonClick, supplier, supplierSearchQuery]);

  //<--------------------sort by functionality for supplier table-------------------->

  const [supplierSortOrder, setSupplierSortOrder] = useState("asc");
  const [supplierSortedColumn, setSupplierSortedColumn] = useState("");

  const supplierSortData = (column) => {
    var newSupplierSortOrder = "asc";
    if (column === supplierSortedColumn) {
      newSupplierSortOrder = supplierSortOrder === "asc" ? "desc" : "asc";
    }
    setSupplierSortOrder(newSupplierSortOrder);
    setSupplierSortedColumn(column);

    supplierFilteredData.sort((a, b) => {
      const valueA =
        typeof a[column] === "string" ? a[column].toLowerCase() : a[column];
      const valueB =
        typeof b[column] === "string" ? b[column].toLowerCase() : b[column];

      if (valueA < valueB) {
        return newSupplierSortOrder === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return newSupplierSortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  //<------End of fetching data from api for the page ------->

  //<---------Authentication of user for the page----------->

  const { user, getUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/");
    } else {
      getUser();
    }
  }, [Cookies.get("token")]);

  //<--------End of authentication of user for the page--------->

  return (
    <>
      <div className={` flex-1 ml-20 duration-300`}>
        <h1 className="text-2xl font-semibold ">Vendors</h1>
        <div className="flex flex-col justify-center items-center ">
          <Cards />
        </div>
      </div>
      <div
        className={` flex gap-5 ml-28 justify-start w-11/12 mr-8 duration-300 mt-10`}
      >
        <div
          className={`flex ${
            open ? "gap-24" : "gap-36"
          }  flex-wrap items-center duration-500`}
        >
          <div className="duration-500 rounded-lg">
            <h1 className="text-xl font-bold">Manufacturer</h1>
            <div className="rounded-lg">
              <div
                class="sm:-mx-6 lg:-mx-8  overflow-y-auto rounded-2xl overflow-x-auto border-gray-700  duration-500"
                style={{ width: open ? "400px" : "400px", maxHeight: "400px" }}
              >
                <div class=" align-middle inline-block min-w-full ">
                  <div class="shadow overflow-hidden sm:rounded-lg    ">
                    <table class="min-w-full text-sm text-gray-400 rounded-lg">
                      <thead class="bg-gray-800">
                        <tr>
                          <th scope="col" class=""></th>
                          <div className="flex my-5">
                            <div className="h-auto">
                              <input
                                name="inputQuery"
                                type="text"
                                value={searchQuery}
                                onClick={() => setClick(false)}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="text-black indent-2 font-medium w-60 h-8 rounded-xl border-2 border-black "
                              />
                            </div>
                            <div
                              onClick={() => setClick(true)}
                              className="focus:ring-4 shadow-lg transform active:scale-75 transition-transform cursor-pointer border-2 border-white rounded-full flex justify-center items-center h-8 w-8 ml-2 bg-white"
                            >
                              <i className="text-black bi bi-search"></i>
                            </div>
                          </div>
                        </tr>
                      </thead>
                      <thead class="bg-gray-800 text-xs uppercase font-medium">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            s.no
                          </th>
                          <th
                            onClick={() => sortData("name")}
                            scope="col"
                            class="px-6 py-3 cursor-pointer"
                          >
                            <div className="flex">
                              <div >
                                Manufacturer Name
                              </div>
                              <span
                                className={`bi bi-arrow-${
                                  sortOrder === "asc" ? "up" : "down"
                                } ml-2`}
                              />
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((data, index) => {
                          return (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                              <td scope="row" class="px-6 py-4 ">
                                {index + 1}
                              </td>
                              <td class="px-6 py-4  text-gray-900 whitespace-nowrap dark:text-white">
                                {data.name}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="duration-500">
            <h1 className="text-xl font-bold">Supplier</h1>
            <div
              class="sm:-mx-6 lg:-mx-8 overflow-hidden overflow-y-auto overflow-x-auto border-gray-700 rounded-2xl duration-500"
              style={{ width: `${open ? "550px" : "600px"}`, maxHeight: "400px"}}
            >
              <div class=" align-middle inline-block min-w-full  ">
                <div class="shadow overflow-hidden sm:rounded-lg    ">
                  <table class="min-w-full text-sm text-gray-400 ">
                    <thead class="bg-gray-800">
                      <tr>
                        <th scope="col" class=""></th>
                        <div className="flex my-5">
                          <div className="h-auto">
                            <input
                              name="inputQuery"
                              type="text"
                              value={supplierSearchQuery}
                              onClick={() => setButtonClick(false)}
                              onChange={(e) => setSupplierSearchQuery(e.target.value)}
                              placeholder="Search..."
                              className="text-black indent-2 font-medium w-60 h-8 rounded-xl border-2 border-black "
                            />
                          </div>
                          <div
                            onClick={() => setButtonClick(true)}
                            className="focus:ring-4 shadow-lg transform active:scale-75 transition-transform cursor-pointer border-2 border-white rounded-full flex justify-center items-center h-8 w-8 ml-2 bg-white"
                          >
                            <i className="text-black bi bi-search"></i>
                          </div>
                        </div>
                        <th scope="col" class=""></th>
                        <th scope="col" class=""></th>
                      </tr>
                    </thead>
                    <thead class="bg-gray-800 text-xs uppercase font-medium">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          s.no
                        </th>
                        <th
                            onClick={() => supplierSortData("name")}
                            scope="col"
                            class="px-6 py-3 cursor-pointer"
                          >
                            <div className="flex">
                              <div >
                                Name
                              </div>
                              <span
                                className={`bi bi-arrow-${
                                  supplierSortOrder === "asc" ? "up" : "down"
                                } ml-2`}
                              />
                            </div>
                          </th>
                          <th
                            onClick={() => supplierSortData("address")}
                            scope="col"
                            class="px-6 py-3 cursor-pointer"
                          >
                            <div className="flex">
                              <div >
                                Address
                              </div>
                              <span
                                className={`bi bi-arrow-${
                                  supplierSortOrder === "asc" ? "up" : "down"
                                } ml-2`}
                              />
                            </div>
                          </th>
                          <th
                            onClick={() => supplierSortData("contact")}
                            scope="col"
                            class="px-6 py-3 cursor-pointer"
                          >
                            <div className="flex">
                              <div >
                                Contact
                              </div>
                              <span
                                className={`bi bi-arrow-${
                                  supplierSortOrder === "asc" ? "up" : "down"
                                } ml-2`}
                              />
                            </div>
                          </th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplierFilteredData.map((data, index) => {
                        return (
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4">{index + 1}</td>
                            <td
                              scope="row"
                              class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {data.name}
                            </td>
                            <td class="px-6 py-4">{data.address}</td>
                            <td class="px-6 py-4">{data.contact}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default Vendors;
