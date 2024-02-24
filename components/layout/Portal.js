import React from 'react'

const Portal = ({children}) => {
  return (
    <div className='w-screen h-screen relative  flex justify-center items-center bg-gray-light'>
{   
   children

}   
 </div>
  )
}

export default Portal
