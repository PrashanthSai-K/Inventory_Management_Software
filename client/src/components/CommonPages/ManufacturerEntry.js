// import {React, useState} from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// const ManufacturerEntry = () => {

//     const [name, setName] = useState(null);
//     const navigate = useNavigate();

//     const handleChange = (e) =>{
//         setName(e.target.value)
//     }

//     const HandleSubmit = async(e) =>{
//         e.preventDefault();
//         const response = await axios.post("http://localhost:4000/manufactureradd", {name: name})
//                         .catch((error)=>console.log(error))
//                         .then(()=>navigate('/'));
//     }

//   return( <>
//     <div className="flex flex-col justify-center items-center">
//       <form>
//         <div class="py-1">
//           <span class="px-1 text-sm text-gray-600">Manufacturer Name</span>
//           <input
//             type="text"
//             value={name}
//             onChange={handleChange}
//             className="text-md block px-3 py-2 rounded-lg w-80
//                 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
//           />
//         </div>

//         <button onClick={HandleSubmit}>Submit</button>
//       </form>
//       </div>
//   </>
  
// )};

// export default ManufacturerEntry;
