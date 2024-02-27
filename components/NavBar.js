import { useState } from "react";
import NewListModal from "./Modal/NewListModal";
import { PiDotsNineBold } from "react-icons/pi";
import Link from "next/link";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="w-screen h-screen  bg-gray-100 border  border-b-gray-300/50 mx-auto flex flex-col justify-center font-roboto text-lg font-light items-center px-4
      md:max-w-[1534px] md:justify-between  md:flex-row md:h-[55px] md:flex-wrap"
    >
      <h3 className="font-script text-8xl mb-8 md:text-4xl md:m-0 text-[#333] font-bold">
        <Link href="/">HomePage</Link>
      </h3>

      {!showModal ? (
        <button
          onClick={toggleModal}
          className="py-2 px-4 capitalize  rounded-md bg-blue-600 text-white text-center text-sm font-semibold font-josefin
          cursor-pointer"
        >
          add new list
        </button>
      ) : (
        <NewListModal setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default NavBar;
