import React, { useEffect, useState } from "react";

function Home() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { Name: "Dashboard" , iconName : "bi-speedometer" },
    { Name: "Master" ,iconName : "bi-file-person-fill"},
    { Name: "Supplier" , iconName : "bi-archive-fill" },
    { Name: "Manufacturer" , iconName : "bi-building" }];

  return (
    <div className=" overflow-x-hidden font-Poppins">

      <div className={`${open ? "w-64" : "w-20"} h-screen bg-blue-800 w-1/6 fixed left-0 right-0 navbar duration-300`} >
        <img src="/images/control.png" alt=""
          className={`absolute -right-3   w-8 border-blue-800 border-2  rounded-full ${!open && "rotate-180"} `}
          style={{top:"88px"}}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4  items-center ml-2 mt-10 font">
          <img src="/images/bit1.png" alt="" className={`duration-300 w-12  ${open && "rotate-[360deg]"}`} />
          <h1 className={`ml-2 mb-2.5 text-3xl pt-1 ${!open && "hidden"}`}>Stores</h1>
        </div>
        <div className="mt-10 mr-2 h-screen" style={{ fontSize: "21px" }}>

          {navItems.map((nav) => (
            <ul>
              <li className="flex gap-x-4 mb-4 cursor-pointer hover:bg-gray-700 rounded-full  pl-5 pt-1 pr-2 pb-2">
                <i className={`bi ${nav.iconName} ${!open && "text-2xl text-center"} duration-300 `}></i>
                <span className={` duration-300 ${!open && "hidden"}`}> {nav.Name}</span>
              </li>
            </ul>
          ))}

        </div>
      </div>

      <div
        className={`h-screen flex-1 p-7 ${open ? "ml-64" : "ml-20"
          } duration-300`}
      >
        <h1 className="text-2xl font-semibold ">Master Page</h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="items-center flex w-11/12 justify-between mt-8 scale-90 tablet:scale-100">
            <div className="w-80 h-36 bg-yellow-300 rounded-3xl flex tablet:h-40">
              <div className="flex flex-col h-full rounded-l-3xl w-1/2 ml-8 items-center justify-around">
                <div className="font-bold font-Saira text-xl tablet:text-2xl">Total price</div>
                <div className="font-bold font-Saira text-2xl tablet:text-4xl">80rs</div>
                <div className="text-xs font-Saira underline cursor-pointer tablet:text-sm">
                  View entire list
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-around">
                <img
                  src="/images/count.png"
                  alt=""
                  className="h-3/4 w-3/4"
                ></img>
              </div>
            </div>

            <div className="w-80 mx-7 h-36 bg-fuchsia-300 rounded-3xl flex tablet:h-40">
              <div className="flex flex-col h-full rounded-l-3xl w-1/2 ml-8 items-center justify-around">
                <div className="font-bold font-Saira text-xl tablet:text-2xl">Total price</div>
                <div className="font-bold font-Saira text-2xl tablet:text-4xl">80rs</div>
                <div className="text-xs font-Saira underline cursor-pointer tablet:text-sm">
                  View entire list
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-around">
                <img
                  src="/images/stock.png"
                  alt=""
                  className="h-3/4 w-3/4"
                ></img>
              </div>
            </div>

            <div className="w-80 h-36 bg-teal-400 rounded-3xl flex tablet:h-40">
              <div className="flex flex-col h-full rounded-l-3xl w-1/2 ml-8 items-center justify-around">
                <div className="font-bold font-Saira text-xl tablet:text-2xl">Total price</div>
                <div className="font-bold font-Saira text-2xl tablet:text-4xl">80rs</div>
                <div className="text-xs font-Saira underline cursor-pointer tablet:text-sm">
                  View entire list
                </div>
              </div>
              <div className="flex  w-1/2 items-center justify-around">
                <img
                  src="/images/total.png"
                  alt=""
                  className="h-3/4 w-3/4"
                ></img>
              </div>
            </div>
          </div>
          <div class={`flex flex-col mt-16 w-11/12 scale-90 tablet:scale-100 ${open && "scale-90 tablet:scale-100"}`}>
            <div class="-my-2  sm:-mx-6 lg:-mx-8 overflow-y-auto overflow-x-auto border-gray-700 rounded-lg ">
              <div class="py-2 align-middle inline-block min-w-full  sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full text-sm text-gray-400">
                    <thead class="bg-gray-800 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Club
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          MP
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          W
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          D
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          L
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GF
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GA
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GD
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Pts
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Last 5
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-gray-800">
                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Man United</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="px-6 py-4 whitespace-nowrap">24</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Man United</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="px-6 py-4 whitespace-nowrap">24</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Man United</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="px-6 py-4 whitespace-nowrap">24</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Man United</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="px-6 py-4 whitespace-nowrap">24</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>

                      <tr>
                        <td class="pl-4">2</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Liverpool</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">9</td>
                        <td class="px-6 py-4 whitespace-nowrap">6</td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">37</td>
                        <td class="px-6 py-4 whitespace-nowrap">21</td>
                        <td class="px-6 py-4 whitespace-nowrap">16</td>
                        <td class="px-6 py-4 whitespace-nowrap">33</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr class="bg-black bg-opacity-20">
                        <td class="pl-4">3</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Leicester City</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">5</td>
                        <td class="px-6 py-4 whitespace-nowrap">31</td>
                        <td class="px-6 py-4 whitespace-nowrap">21</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">32</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clip-rule="evenodd"
                            />
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
    </div>
  );
}

export default Home;
