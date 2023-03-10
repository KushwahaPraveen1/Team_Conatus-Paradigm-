import React from 'react'
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import './Login.css'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import axios from 'axios';
function Signup() {
  let navigate = useNavigate();
  const [inventoryname,setInventoryname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmpassword,setconfirmpassword]=useState("");
  const [phone,setPhone]=useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inventoryname,email,phone,password)
    if(password!==confirmpassword)
    {
        toast.error('Password do not match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    else{
         axios.post("https://signup-n0xf.onrender.com/signup",{
      inventoryname : inventoryname,
         email : email,     
      password : password,
      phone : phone,
      
     })
           .then(result=>{
      console.log(result)
      console.log(result.status)
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      navigate('/login')


     }) 
           .catch(err=>{
            console.log(err)
            console.log(err.response.status)
            toast.error('Wrong Credentials!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            
           }) 
  }
  }
  return (
    <>
    <div className='login_mai'>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <div className="container text-center">
      <div className='row'>
      <div className="col-sm-3">LOGO</div>
      <div className="col-sm-9">

      <div className='login_main'>
      <div className='logoo'>LOGO</div>
        <div className='login_card1'>
            <h1 className='create_account'>Create Account</h1>
<div className="center">
            <div className="inputbox">
                <input type="text"value={inventoryname} onChange={(e)=>setInventoryname(e.target.value)} required="required" />
      <span>Name</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required" />
      <span>Email</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="number"value={phone} onChange={(e)=>setPhone(e.target.value)} required="required" />
      <span>Phone Number</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required="required" />
      <span>Password</span>
    </div>
</div>
<div className="center">
            <div className="inputbox">
                <input type="password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} required="required" />
      <span>Confirm Password</span>
    </div>
</div>
 <br></br> <br></br>
 
 {/* <input type="checkbox"/> I Understand and accept the Terms of use and Privacy Policy  */}

<br></br>
<button className='verify_button' onClick={handleSubmit}>Login</button>
<br></br>

<p className='already'>Already have an account?<NavLink to ="/login">Login</NavLink></p>
        </div>
       
</div>
        
         
        </div>

    </div>
    </div>
      </div>
    </>
  )
}

export default Signup;