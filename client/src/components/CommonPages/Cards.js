import React from 'react'

function Cards() {
    const cards = [
        { color: "bg-yellow-300", src: "count" },
        { color: "bg-fuchsia-300", src: "stock" },
        { color: "bg-teal-400", src: "total" }
      ];
  return (
    <div className='w-full'>
         <div className="items-center flex w-11/12 justify-between mt-8 scale-90 tablet:scale-100">
            {cards.map((items) => (
              <div
                className={`w-80 h-36 ${items.color} rounded-3xl flex tablet:h-40`}
              >
                <div className="flex flex-col h-full rounded-l-3xl w-1/2 ml-8 items-center justify-around">
                  <div className="font-bold font-Saira text-xl tablet:text-2xl">
                    Total price
                  </div>
                  <div className="font-bold font-Saira text-2xl tablet:text-4xl">
                    80rs
                  </div>
                  <div className="text-xs font-Saira underline cursor-pointer tablet:text-sm">
                    View entire list
                  </div>
                </div>
                <div className="flex w-1/2 items-center justify-around">
                  <img
                    src={`/images/${items.src}.png`}
                    alt=""
                    className="h-3/4 w-3/4"
                  ></img>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Cards