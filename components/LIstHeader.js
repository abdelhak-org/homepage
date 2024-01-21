import React from 'react'

const LIstHeader = ({setCollapse ,collapse , listCategory }) => {
  return (
    <h6
    onClick={() => setCollapse(!collapse)}
    className="w-full my-2 text-center  font-bold text-md cursor-pointer capitalize font-roboto"
  >
    {listCategory}
  </h6>
  )
}

export default LIstHeader
