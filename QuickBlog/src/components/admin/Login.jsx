import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContest';
 import { useNavigate } from 'react-router-dom';

import toast from "react-hot-toast";
import axios from 'axios';

const Login = () => {

  // const navigate = useNavigate();

  const{token,setToken}=useAppContext();

  const [email, setEmail]=useState('admin01@gmail.com');
  const [password,setPassword]=useState('Admin@12');

  const handleSubmit = async (e) => {
  e.preventDefault(); // page reload nahi hoga
  // yahan apna login ya data submit ka logic likh sakte hain
  
   try {
    
       const {data}=await axios.post('/api/admin/login',{email,password})

       if(data.success)
       {
        console.log(data.token);
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults .headers.common['Authorization']=data.token;

       
       }
       else{
    toast.error(data.message)

       }
   } catch (error) {
    
    toast.error(error.message)
   }
}

   
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-sm p-6 max-md:m-6 bord border-primaary/30 
        shadow-xl shadow-primaary/15 rounded-lg'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-full py-6 text-center'>
                <h1 className='text-3xl font-bold '><span className='text-primaary'>Admin</span>Login</h1>
                <p className='font-light'>Enter your credentials to access the admin panel</p>
              </div>

              <form onSubmit={ handleSubmit}>
                <div className='flex flex-col'>
                  <label >Email</label>
                  <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder='your email id'
                  className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                </div>
           
                <div className='flex flex-col'>
                  <label >Password</label>
                  <input onChange={e=>setPassword(e.target.value)} value={password} type="password"   required placeholder='your password'
                  className='border-b-2 border-gray-300 p-2 outline-none mb-6' />
                </div>

                
              <button type='submit' className='w-full py-3 font-medium
              bg-primaary text-white rounded cursor-pointer hover:bg-primaary/90 
              transition-all'  >Login</button>
              </form>


            </div>
        </div>
    </div>
  )
}

export default Login