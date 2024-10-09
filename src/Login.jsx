


import React, { useState } from "react";
 import login from "./assets/login_1.png"
 
function Login()  {

const [email , setEmail] =useState('')
const [password , setPassword] =useState('')
async function submit(e) {
  e.preventDefault();
}

  return (
    <>
<div className="flex bg-[#FEF6EF]" >
  <form action=""  className="mt-[200px] ml-[200px]">
    <h1 className="ml-[10px]  font-sans text-6xl font-normal text-[#424242] ">Wellcome!!</h1>

    <input type="email" 
    onClick={(e)=>{setEmail(e.target.value)}}
    placeholder=" @Enter Your Insta Id" 
    className="mt-8 placeholder:p-7 border-[1px] border-slate-600 h-[50px] w-80 rounded-3xl" />
    <br />
    <input type="password" 
     onClick={(e)=>{setPassword(e.target.value)}}
    placeholder="Enter your password " 
    className=" placeholder:p-7 align-middle placeholder:font-sans border-[1px] border-slate-600 mt-5 h-[50px] w-80 rounded-3xl" />
    
    <p className="ml-[170px] " >Forgot Password?</p>
  <button type="submit" onClick={submit} className="  bg-[#FCE2CE] font-sans text-xl font-normalC  border-[0px] ml-[0px] mt-8 border-slate-600 h-[50px] w-80 rounded-3xl" >Login</button>
  <h1 className="flex  ml-[150px] mt-4 "> -or-</h1>
  <h1 className="ml-[50px] mt-4"> Don't have an account?<a href="" className="font-sans text-xl font-normal text-[#C3824E] "> Sing up</a></h1>
  <h1 className="ml-[30px] mt-4"> This page is under<a href="https://www.instagram.com/mr_.shinchan._?igsh=MWtmbWQ4bGV6dml1cg==" className="font-sans text-l font-normal text-[#C3824E] ">  RJ Shinchan</a> Control</h1>
  </form>

<div className=" inline ">
 
  <div className="border-black- h-[650px] w-[600px]  bg-[#FCE2CE] mt-8 rounded-t-full ml-[320px] m"></div>
  <img src={login} className="h-[500px] mt-[-570px] ml-[270px] bg-transparent " />
</div>
</div>
{/* Right side  */}


    </>
  )
}

export default Login