import React, { useEffect, useState } from "react";
import Cards from "../CommonPages/Cards";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import Cookies from "js-cookie";
function Vendors({isloggedin}) {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [manufacturer, setManufacturer] = useState([]);
  const [supplier, setSupplier] = useState([]);

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
    // console.log(manufacturer);
  },[]);


  const {user, getUser} =useAuth();


  useEffect(()=>{
    if(!Cookies.get("token")){
      navigate("/");
    }else{
      getUser();
    }
  },[Cookies.get("token")])
  

  return (
    <>
      <div className={` flex-1 ${open ? "ml-64" : "ml-20"} duration-300`}>
        <h1 className="text-2xl font-semibold ">Vendors</h1>
        <div className="flex flex-col justify-center items-center ">
          <Cards />
          <div
            class={`flex flex-col mt-16 w-11/12 scale-90 tablet:scale-100 ${
              open && "scale-90 tablet:scale-100"
            }`}
          ></div>
        </div>
      </div>
      <div
        className={` flex gap-6 justify-center ${
          open ? "ml-64" : "mr-8"
        } duration-300`}
      >
        <div className="flex flex-col gap-10 ">
          <div className="text-2xl font-semibold ">Manufacturer</div>
          <div class="relative rounded-2xl overflow-x-auto h-2/6">
            <table class="w-96 text-sm text-left text-gray-500 dark:text-gray-400 ">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {data.name}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="text-2xl font-semibold ">Supplier</div>
          <div class="relative overflow-x-auto rounded-2xl h-2/6">
            <table
              style={{ width: "500px" }}
              class=" text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <td class="px-6 py-4">{index+1}</td>
                        <td
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
    </>
  );
}

export default Vendors;
