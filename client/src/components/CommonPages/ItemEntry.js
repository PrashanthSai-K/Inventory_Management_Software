
// // import React from 'react';
// // import { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';




//   // const [data, setData] = useState({
//   //   itemType: "",
//   //   manufacturerName: "",
//   //   supplierName: "",
//   //   itemName: "",
//   //   subName: "",
//   //   Spec1: "",
//   //   Spec2: "",
//   //   Spec3: "NIL",
//   //   cost: "",
//   //   units: "",
//   // });
//   // const navigate = useNavigate();
//   // const [manufacturer, setManufacturer] = useState([]);
//   // const [supplier, setSupplier] = useState([]);
//   // const [quantityUnits, setQuantityUnits] = useState([]);

//   // async function fetchManufacturer() {
//   //   const response = await axios.get("http://localhost:4000/getManufacturer");
//   //   setManufacturer(response.data);
//   // }
//   // async function fetchSupplier() {
//   //   const response = await axios.get("http://localhost:4000/getSupplier");
//   //   setSupplier(response.data);
//   // }
//   // async function fetchQuantityUnits(){
//   //   const response = await axios.get("http://localhost:4000/getQuantityUnits");
//   //   setQuantityUnits(response.data);
//   // }

//   // useEffect(() => {
//   //   fetchManufacturer();
//   //   fetchSupplier();
//   //   fetchQuantityUnits();

//   // }, []);

// // const ItemEntry = () => {

// //   const [data, setData] = useState({ name: "", address: "", contact: "" });
// //   const navigate = useNavigate();
// //   const [manufacturer, setManufacturer] = useState([])
// //   const [supplier, setSupplier] = useState([]);

// //   async function fetchManufacturer() {
// //     const response = await axios.get("http://localhost:4000/getManufacturer")
// //     setManufacturer(response.data);
// //   }
// //   async function fetchSupplier() {
// //     const response = await axios.get("http://localhost:4000/getSupplier")
// //     setSupplier(response.data);
// //   }

// //   useEffect(() => {
// //     fetchManufacturer();
// //     fetchSupplier();

// //   }, [])

//   const handleChange = (e) => {
//     e.preventDefault();
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
//   const [error, setError] = useState(true);

//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios
//       .post("http://localhost:4000/itemadd", data)
//       .catch((error) => console.log(error));
//     // .then(() => navigate("/"));
//     console.log(data);
//     setData({
//       itemType: "",
//       manufacturerName: "",
//       supplierName: "",
//       itemName: "",
//       subName: "",
//       Spec1: "",
//       Spec2: "",
//       Spec3: "NIL",
//       cost: "",
//       units: "",
//     });
//   };

//   // console.log(manufacturer);

// <<<<<<< HEAD
//   return (
//     <>
//       {manufacturer && supplier && (
//         <form onChange={handleChange} onSubmit={HandleSubmit}>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Entry</span>
//           </div>
//           <div class="py-1">
//             {/* {error && <span>All fiedls Are Mandotary * </span>} */}
//             <span class="px-1 text-sm text-gray-600">Item Type</span>
//             <select id="itemType" name="itemType" value={data.itemType} 
//               className="text-md block px-3 py-2 rounded-lg w-full
//               bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//               required
//             >
//               <option value="" selected>Select Item Type</option>
//               <option value="recurring">
//                 Recurring
//               </option>
//               <option value="non-recurring">Non-Recurring</option>
//             </select>
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Manufacturer Name</span>
//             <input
//               type="text"
//               name="manufacturerName"
//               value={data.manufacturerName}
//               list="manufacturers"
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//               required

//             />
//             <datalist id="manufacturers" className="data-te-select-init">
//               {manufacturer.map((manu) => {
//                 return <option value={manu.id}>{manu.name}</option>;
//               })}
//               <option>
//                 <a href="">Click to add</a>
//               </option>
//             </datalist>
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Supplier Name</span>
//             <input
//               type="text"
//               name="supplierName"
//               value={data.supplierName}
//               list="supplier"
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//             <datalist id="supplier">
//               {supplier.map((supp) => {
//                 return <option value={supp.id}>{supp.name}</option>;
//               })}
//             </datalist>
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Name</span>
//             <input
//               type="text"
//               name="itemName"
//               value={data.itemName}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Sub-Name</span>
//             <input
//               type="text"
//               name="subName"
//               value={data.subName}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Spec-1</span>
//             <input
//               type="text"
//               name="Spec1"
//               value={data.Spec1}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Spec-2</span>
//             <input
//               type="text"
//               name="Spec2"
//               value={data.Spec2}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Item Spec-3</span>
//             <input
//               type="text"
//               name="Spec3"
//               value={data.Spec3}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Cost Per Item</span>
//             <input
//               type="text"
//               name="cost"
//               value={data.cost}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             />
//           </div>
//           <div class="py-1">
//             <span class="px-1 text-sm text-gray-600">Quantity Units</span>
//             <select name="units"  value={data.units}
//               className="text-md block px-3 py-2 rounded-lg w-full
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//                 required
//             >
//               {quantityUnits.map((unit)=>{
//                 return(
//                   <option value={unit.name}>{unit.name}</option>
//                 )
//               })}
//             </select>

//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </>
//   );
// };

// export default ItemEntry;
// =======
// //   const handleChange = (e) => {
// //     e.preventDefault();
// //     setData({ ...data, [e.target.name]: e.target.value })
// //   };

// //   const HandleSubmit = async (e) => {
// //     e.preventDefault();
// //     const response = await axios
// //       .post("http://localhost:4000/supplieradd", data)
// //       .catch((error) => console.log(error))
// //       .then(() => navigate("/"));
// //     console.log(data);
// //     setData({ name: "", address: "", contact: "" })
// //   };


// //   return (
// //     <>

// // {manufacturer && supplier &&
// //                         <form onChange={handleChange}>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Entry</span>
// //                                 <input
// //                                     type="text"
// //                                     name="name"
// //                                     value={data.name}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Type</span>
// //                                 <input
// //                                     type="text"
// //                                     name="address"
// //                                     value={data.address}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Manufacturer Name</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}
// //                                     list='manufacturers'
// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                                 <datalist id='manufacturers' className='data-te-select-init'>
// //                                     {manufacturer.map((manu) => {
// //                                         return (
// //                                             <option value={manu.id}>{manu.name}</option>
// //                                         )
// //                                     })}
// //                                     <option><a href="">Click to add</a></option>
// //                                 </datalist>
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Supplier Name</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}
// //                                     list='supplier'
// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                                 <datalist id='supplier'>
// //                                     {supplier.map((supp) => {
// //                                         return (
// //                                             <option value={supp.id}>{supp.name}</option>
// //                                         )
// //                                     })}
// //                                 </datalist>
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Name</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Sub-Name</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Spec-1</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Spec-2</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Item Spec-3</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Cost Per Item</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <div class="py-1">
// //                                 <span class="px-1 text-sm text-gray-600">Quantity Units</span>
// //                                 <input
// //                                     type="text"
// //                                     name="contact"
// //                                     value={data.contact}

// //                                     className="text-md block px-3 py-2 rounded-lg w-full
// //                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
// //                                 />
// //                             </div>
// //                             <button onClick={HandleSubmit}>Submit</button>
// //                         </form>


// //                     }
// //     </>



// //   )
// // }

// // export default ItemEntry
// >>>>>>> 3284e0a06c6cddf0d8b4218e787b4579f12e5764
