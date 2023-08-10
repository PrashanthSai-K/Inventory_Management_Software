import React from 'react'

const Model = ({ isVisible , onClose }) => {
    if (!isVisible) return null;
    return (

        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>

            <div className='flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
                <div className='bg-white w-96 h-96 overflow-x-auto overflow-y-auto border-gray-700 rounded-lg'>
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
                    <label htmlFor="">name</label>
                    <input type="text" />

                </div>
            </div>

        </div>
    )
}

export default Model