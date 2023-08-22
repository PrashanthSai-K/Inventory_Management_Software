import React, { useEffect, useState } from "react";
import { SomeComponent } from "tw-elements";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { redirect, useNavigate } from "react-router-dom";
import { Input, Ripple, initTE } from "tw-elements";
import { useAuth } from "../AuthContext";

initTE({ Input, Ripple });

function LoginPage() {

  const navigate = useNavigate();

  // async function loginUser(response) {
  //   const result = await axios
  //     .post("http://localhost:4000/loginUser", { res: response })
  //     .catch((error) => console.log(error))
  //     .then((response)=>Cookies.set("token", response.data))
  //     .then(()=>getUser())
  //     .then(()=>navigate("/dashboard"));
  // }

  const { login, getUser } = useAuth();

  useEffect(()=>{
    if(Cookies.get('token')){
      getUser().then(()=>navigate('/dashboard'))
    }
  })

  const loginCall = useGoogleLogin({
    onSuccess: (tokenResponse) => login(tokenResponse),
  });

  return (
    <div className="h-full w-full flex justify-center items-center bg-sky-200">
      <div className="w-96 h-3/4 bg-white rounded-3xl pt-6">
        <div className="h-36 flex flex-col justify-center items-center ">
          <img className="w-28 h-28" src="/images/bit-logo.png" alt="" />
          <div className="text-5xl">stores</div>
        </div>
        <form
          action=""
          method=""
          className="h-1/2 flex flex-col items-center w-full pt-10 justify-center "
        >
          <div className="relative mb-6 w-3/4" data-te-input-wrapper-init>
            <input
              type="text"
              className="peer text-lg block min-h-[auto] w-full border-b-2 border-black border-0  bg-transparent px-1 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
              id="exampleFormControlInput2"
              placeholder="Email address"
            />
            <label
              htmlFor="exampleFormControlInput2"
              className="pointer-events-none absolute text-xl top-0 mb-0 max-w-[90%] origin-[0_0]  truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
            >
              Username
            </label>
          </div>

          <div className="relative mb-6 w-3/4" data-te-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] text-lg w-full border-0  border-b-2 border-black  bg-transparent px-1 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              required
              id="exampleFormControlInput22"
              placeholder="Password"
            />
            <label
              htmlFor="exampleFo.rmControlInput22"
              className="pointer-events-none absolute text-xl top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          <div className="justify-start w-3/4 pt-5">
            <button className="border-2 border-black text-xl rounded-xl pt-2 pb-2 pl-5 pr-5">
              Log in!!!
            </button>
            <div id="my-signin2" className="pt-3">
              <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      onClick={()=>loginCall()}
              >
                <svg
                  class="h-6 w-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="800px"
                  height="800px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                >
                  {" "}
                  <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-401.000000, -860.000000)"
                    >
                      {" "}
                      <g
                        id="Google"
                        transform="translate(401.000000, 860.000000)"
                      >
                        {" "}
                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
