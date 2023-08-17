import React, { useState } from "react";
import { SomeComponent } from "tw-elements";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; 
import { Input, Ripple, initTE } from "tw-elements";
import { useAuth } from "../AuthContext";

initTE({ Input, Ripple });


function LoginPage({getUser}) {

  const navigate = useNavigate();

  // async function loginUser(response) {
  //   const result = await axios
  //     .post("http://localhost:4000/loginUser", { res: response })
  //     .catch((error) => console.log(error))
  //     .then((response)=>Cookies.set("token", response.data))
  //     .then(()=>getUser())
  //     .then(()=>navigate("/dashboard"));
  // }

  const {login} = useAuth();

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
              for="exampleFormControlInput2"
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
              for="exampleFormControlInput22"
              className="pointer-events-none absolute text-xl top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
            >
              Password
            </label>
          </div>
          <div className="justify-start w-3/4 pt-5">
            <button className="border-2 border-black text-xl rounded-xl pt-2 pb-2 pl-5 pr-5">
              Log in!!!
            </button>
            <div id="my-signin2">
              <button onClick={() => loginCall()}>Sign in with Google 🚀 </button>;
              ; ;
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
