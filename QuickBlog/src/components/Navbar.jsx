import React, { use } from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  const navigate=useNavigate() // navigate one page to another by using hooks

  return (
    
        <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
            <img src={assets.logo} alt="logo" className='w-32 sm:w-44' onClick={()=>navigate('/')} />
            <button className='flex items-center gap-2 rounded-full text-sm 
            cursor-pointer bg-primaary text-white
             px-10 py-2.5' onClick={()=>navigate('/login')}>Login<img src={assets.arrow} className='w-3' alt="arrow"></img>
              </button>
        </div>
     
  )
}

export default Navbar