import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManufacturerPopUp = ({ isVisible, onClose }) => {
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clearMessage = () => {
    setMessage(null);
  };

  useEffect(() => {
    setTimeout(clearMessage, 3000);
  }, [message]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:4000/api/manufactureradd", { name: name })
      .catch((error) => console.log(error))
      .then((response) => setMessage(response.data));
    // .then(() => navigate('/'));
  };
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="popup-responsive bg-white px-10 py-5 overflow-x-auto overflow-y-auto border-gray-700 rounded-lg">
          <div className="w-full text-end">
            <button
              className="text-black rounded-full border-2 border-black px-2 text-3xl"
              onClick={() => onClose()}
            >
              X
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div class="py-1 flex  pb-8 ">
              <span class="px-1 text-black font-medium text-2xl">
                Manufacturer Entry
              </span>
            </div>
            <form>
              {message ? <div>{message}</div> : null}
              <div className="">
                <div class="py-1 flex flex-wrap">
                  <span class="px-1 py-1 whitespace-nowrap text-md text-gray-600">
                    Manufacturer Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                  />
                </div>
                <center>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-10 rounded mb-10"
                    onClick={HandleSubmit}
                  >
                    Submit
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturerPopUp;
