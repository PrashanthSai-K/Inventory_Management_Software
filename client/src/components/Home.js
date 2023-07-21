import React, { useEffect, useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" overflow-x-hidden">
      {/* <div
        style={{ backgroundColor: "#080F34" }}
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen left-0 top-0  p-5 pt-8 relative duration-300 fixed`}
      >
        <img
          src="/images/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="daataa"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/images/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="daataa"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Stores
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/images/${Menu.src}.png`} alt="daataa" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div> */}

	  <div className={`${open? "w-64" : "w-20"} h-screen bg-blue-800 w-1/6 fixed left-0 right-0 navbar duration-300`} >
	  		<img src="/images/control.png" alt="" 
				 className={`absolute -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"} `}
				 onClick={()=>setOpen(!open)}
			/>

			<div className="flex gap-x-4 items-center ml-3 mt-10 font"> 
	  			<img src="/images/bit1.png" alt="" className={`duration-300  ${open && "rotate-[360deg]"}`}/>
				<h1 className={`ml-5 text-3xl pt-1 ${!open && "hidden"}`}>Stores</h1>
			</div>
			<div className="mt-10 ml-4 ">
				<ul>
					<li className="flex gap-x-4">
	  					<img src="images/chart_fill.png" className="" alt="" />
						<span className={` duration-300 ${!open && "hidden" }`}> Master Page</span>
					</li>
				</ul>
			</div>
	  </div>

      <div className={`h-screen flex-1 p-7 ${open ? "ml-64": "ml-20"} duration-300`}>
        <h1 className="text-2xl font-semibold ">Master Page</h1>
        <div class="flex flex-col mt-6">
		<div class="-my-2  sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden sm:rounded-lg">
					<table class="min-w-full text-sm text-gray-400">
						<thead class="bg-gray-800 text-xs uppercase font-medium">
							<tr>
								<th></th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									Club
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									MP
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									W
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									D
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									L
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									GF
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									GA
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									GD
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									Pts
								</th>
								<th scope="col" class="px-6 py-3 text-left tracking-wider">
									Last 5
								</th>	
							</tr>
						</thead>
						<tbody class="bg-gray-800">
							
							<tr class="bg-black bg-opacity-20">
								<td class="pl-4">
									1
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png" alt="" />
									<span class="ml-2 font-medium">Man United</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									17
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									11
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									3
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									3
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									34
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									24
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									10
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									34
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
								</td>
							</tr>
							<tr>
								<td class="pl-4">
									2
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png" alt="" />
									<span class="ml-2 font-medium">Liverpool</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									17
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									9
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									6
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									2
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									37
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									21
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									16
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									33
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<svg class="w-4 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
								</td>
							</tr>
							<tr class="bg-black bg-opacity-20">
								<td class="pl-4">
									3
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<img class="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png" alt="" />
									<span class="ml-2 font-medium">Leicester City</span>
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									17
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									10
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									2
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									5
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									31
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									21
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									10
								</td>
								<td class="px-6 py-4 whitespace-nowrap">
									32
								</td>
								<td class="flex px-6 py-4 whitespace-nowrap">
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<svg class="w-4 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
									</svg>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
      </div>
	  
    </div>
  );
}

export default Home;
