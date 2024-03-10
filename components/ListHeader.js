import React  , {useState} from 'react'

const ListHeader = ({ listCategory , collapse , setCollapse }) => {

  return (
    <h6
    onClick={() => setCollapse(!collapse)}
    className="w-full my-2 text-center  font-bold text-md cursor-pointer capitalize font-roboto"
  >
    {listCategory}
  </h6>
  )
}

export default ListHeader
