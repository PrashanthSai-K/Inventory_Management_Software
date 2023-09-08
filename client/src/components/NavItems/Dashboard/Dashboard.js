import { React, useEffect, useState } from "react";
import Areachart from "./Graphs/Areachart";
import Barchart from "./Graphs/Barchart";
import Piechart from "./Graphs/Piechart";
import axios from 'axios'

function Dashboard({ open, setOpen }) {

  const setNavState = () => {
    setOpen(open);
  };


  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [labitem, setLabitem] = useState([]);


  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getInventory'); // Replace '/api/data' with your API endpoint    
      setInventory(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getCategories'); // Replace '/api/data' with your API endpoint
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLabitem = async () => {
    try {
      const response = await axios.get('http://localhost:4000/getLabItem'); // Replace '/api/data' with your API endpoint
      setLabitem(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchInventory();
    fetchCategories();
    fetchLabitem();
  }, []);

  useEffect(() => {
    if (categories.length > 0 && inventory.length > 0 && labitem.length > 0) {
      setTimeout(() => setIsLoading(), 2000)

    }
  }, [categories, inventory, labitem])

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-full duration-800 ">
          <span class="loader"></span>
          Loading
        </div >
      ) : (
        <>
          <div  style={{ backgroundColor: "#F4F4F4" }}>
            <h1 style={{ fontFamily: 'Iceland', fontWeight: "bold", fontSize: "40px", paddingLeft:"7%" }} class={`text-start pt-10`}>Dashboard</h1>
            <div  className= "w-11/12 pl-24 area animate1">
              <Areachart inventory={inventory} />
            </div>
            <br /><br />
            <div className="twochart" style={{ display:"flex" , width:"100%" ,gap:"2%", justifyContent:"center" }}>
                <Barchart categories={categories} open={open} setOpen={setOpen} />
                <Piechart labitem={labitem} />
            </div>
          </div>

        </>
      )
      }
    </>
  )
}


export default Dashboard



