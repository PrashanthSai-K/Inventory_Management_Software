import { React} from 'react'
import { useState} from 'react';
import ItemTable from './ItemTable/ItemTable';
import StockTable from './StockTable/StockTable';



function Stores() {
  
  const [open, setOpen] = useState(false);
  return (
    <>
    <div
        className={` gap-6 justify-center ${
          open ? "ml-64" : "mr-8"
        } duration-300`}
      >
        <ItemTable/>
        <StockTable/>
      </div>
    </>

   

  )
}

export default Stores