import React from 'react'

const StockPopUp = ({ isVisible , onClose }) => {
    if (!isVisible) return null;
    return (

        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className='flex flex-col'>
                <button className='text-white text-3xl place-self-end' onClick={() => onClose()}>X</button>
                <div style={{width:"1000px" , height:"600px"}} className='bg-white overflow-x-auto overflow-y-auto border-gray-700 rounded-lg'>
                    <label htmlFor="">stock</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />

                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />

                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />
                    <label htmlFor="">name</label>
                    <input type="text" />

                </div>
            </div>

        </div>
    )
}

export default StockPopUp