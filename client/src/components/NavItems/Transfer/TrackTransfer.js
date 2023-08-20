import axios from "axios";
import React, { useEffect, useState } from "react";

const TrackTransfer = ({isVisible, onClose, user}) => {

  const [transferData, setTransferData] = useState();

  async function fetchTransferData() {
    try {
      const response = await axios.post(
        "http://localhost:4000/getTrackTransfer", user
      );
      if(response.status == 200){
        setTransferData(response.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(transferData)

  useEffect(()=>{
    fetchTransferData();
  })
  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col">
          <button
            className="text-white text-3xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="w-full bg-white h-full">
            <div class="sm:-mx-6 lg:-mx-8 overflow-y-auto overflow-x-auto border-gray-700 rounded-lg ">
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
    </>
  );
};

export default TrackTransfer;
