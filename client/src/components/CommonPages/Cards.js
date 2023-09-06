import React from 'react'

function Cards() {
    const cards = [
        { color: "bg-yellow-300", src: "count" },
        { color: "bg-fuchsia-300", src: "stock" },
        { color: "bg-teal-400", src: "total" }
      ];
  return (
    <div className='w-full justify-center items-center'>
         <div className="items-center justify-center flex w-full gap-10 mt-8 scale-90 flex-wrap tablet:scale-100">
            {cards.map((items) => (
              <div
                className={`w-80 h-36 ${items.color} rounded-3xl  flex tablet:h-40`}
              >
                <div className="flex flex-col h-full rounded-l-3xl w-1/2 ml-8 items-center justify-around">
                  <div className="font-bold  text-xl tablet:text-2xl">
                   Total price
                  </div>
                  <div className="card-amount-adjust font-bold text-3xl">
                    80rs
                  </div>
                  <div className="card-text-adjust text-lg underline cursor-pointer tablet:text-sm">
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