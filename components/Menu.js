import  React , {useState} from 'react'
import { FiSettings } from "react-icons/fi";
import { BsDoorClosed } from "react-icons/bs";
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (

         <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-0 right-0 pr-2 text-2xl  z-50 cursor-pointer"
          >
            {!isOpen ? (
              <FiSettings className="text-xl my-2" />
            ) : (
              <BsDoorClosed className="text-xl my-2" />
            )}
          </div>

    
  )
}

export default Menu
