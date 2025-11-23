import React from 'react'

const ListShimmer = () => {
  return (
   <tr className='border-y border-gray-300'>
    
       <th className='px-2 py-4'></th>
       <td className='px-2 py-4'></td>
       <td className='px-2 py-4 max-sm:hidden'></td>
       <td className='px-2 py-4 max-sm:hidden'></td>
       <td className='px-2 py-3 flex text-xs gap-3'>
        <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'></button>
        <img className='w-8 hover:scale-110 transition-all cursor-pointer' src="" alt="" />

        </td>
        
   </tr>
  )
}

export default ListShimmer