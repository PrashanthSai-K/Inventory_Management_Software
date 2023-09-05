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
  const [isLoading, setIsLoading] = useState(true);

  //<-----End of creation of required state variables------>

  //<------Fetching data from api to render the page------->

  async function fetchManufacturer() {
    const response = await axios
      .get("http://localhost:4000/api/getManufacturer")
      .catch((error) => console.log(error));
    setManufacturer(response.data);
  }
  async function fetchSupplier() {
    const response = await axios
      .get("http://localhost:4000/api/getSupplier")
      .catch((error) => console.log(error));
    setSupplier(response.data);
  }

  useEffect(() => {
    fetchManufacturer();
    fetchSupplier();
  }, []);

  useEffect(() => {
    if (supplier.length > 0 && manufacturer.length > 0) {
      setIsLoading(false);
    }
  }, [supplier, manufacturer])

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
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <span class="loader"></span>
        </div >
      ) : (
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
            <h1 className="text-xl font-bold">Supplier</h1>
            <div className="rounded-lg"> 
              <div
                class="sm:-mx-6 lg:-mx-8  h-96 overflow-y-auto rounded-2xl overflow-x-auto border-gray-700  duration-500"
                style={{ width: open ? "400px" : "400px" }}
              >
                <div class=" align-middle inline-block min-w-full ">
                  <div class="shadow overflow-hidden sm:rounded-lg    ">
                    <table class="min-w-full text-sm text-gray-400 rounded-lg">
                      <thead class="bg-gray-800 text-xs uppercase font-medium">
                        <tr>
                          <th scope="col" class="px-6 py-3"></th>
                          <th scope="col" class="px-6 py-3">
                            Manufacturer Name
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {manufacturer &&
                          manufacturer.map((data, index) => {
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
            <h1 className="text-xl font-bold">Manufacturer</h1>
            <div
              class="sm:-mx-6 lg:-mx-8 overflow-hidden overflow-y-auto  h-96 overflow-x-auto border-gray-700 rounded-2xl duration-500"
              style={{ width: `${open ? "550px" : "600px"}` }}
            >
              <div class=" align-middle inline-block min-w-full  ">
                <div class="shadow overflow-hidden sm:rounded-lg    ">
                  <table class="min-w-full text-sm text-gray-400 ">
                    <thead class="bg-gray-800 text-xs uppercase font-medium">
                      <tr>
                        <th scope="col" class="px-6 py-3"></th>
                        <th scope="col" class="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                          contact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplier &&
                        supplier.map((data, index) => {
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
      </>
      )}
    </>
  );
}

export default Vendors;
