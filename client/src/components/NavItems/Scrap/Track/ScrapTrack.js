import React from 'react'

const ScrapTrack = ({onClose, isVisible}) => {



  if(!isVisible) return null;
   
  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col">
            <div
                style={{ height: "600px" }}
                className="popup-responsive animate1 popup-responsive-small bg-white w-full px-14 py-5 overflow-x-auto overflow-y-auto flex flex-col items-center border-gray-700 rounded-lg"
            >
                <button
                    className="text-black rounded-full border-black px-2 border-2 text-3xl place-self-end"
                    onClick={() => onClose()}
                >
                    X
                </button>
                <div className="flex flex-col justify-center items-center bg-white p-8 rounded-2xl">
                    Scrap Track
                </div>
            </div>

        </div>

    </div>


</>
  )
}

export default ScrapTrack