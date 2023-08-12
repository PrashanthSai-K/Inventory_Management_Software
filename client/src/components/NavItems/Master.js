import React from 'react'
import Cards from '../CommonPages/Cards'
import Table from '../CommonPages/Table'
import { useState } from 'react';

function Master() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`flex-1 ${open ? "ml-64" : "ml-20"} duration-300`}
      >
        <h1 className="text-2xl font-semibold ">Master Page</h1>
        <div className="flex flex-col justify-center items-center ">
          <Cards />
          <div
            class={`flex flex-col mt-16 w-11/12 scale-90 tablet:scale-100 ${
              open && "scale-90 tablet:scale-100"
            }`}
          ></div>
          
        </div>
        <Table />
      </div>
    </>

  )
}

export default Master