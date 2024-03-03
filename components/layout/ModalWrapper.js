import React from 'react'

const ModalWrapper = ({children}) => {
  return (
    <div  className="w-screen h-screen fixed top-0 right-0 flex justify-center items-center 
    bg-[#333333bf]  z-50">
    <div  className="w-[660px]  bg-white  rounded-md flex flex-col justify-between p-4 " >

        {children}


    </div>
    </div>
  )
}

export default ModalWrapper
