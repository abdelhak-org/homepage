import { useState } from "react";
import NewListModal from "./Modal/NewListModal";
import { useUiContext } from "../context/ui/UiContext";
import { PiDotsNineBold } from "react-icons/pi";
import Link from "next/link";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="w-screen h-screen  bg-gray-50 mx-auto flex flex-col justify-center font-roboto text-lg font-light items-center px-4
    md:max-w-[1534px] md:justify-between  md:flex-row md:h-[55px] md:flex-wrap"
    >
      <h3 className="font-script text-8xl mb-8 md:text-4xl md:m-0 text-[#333] font-bold">
        <Link href="/">HomePage</Link>
      </h3>

      {!showModal ? (
        <div
          onClick={toggleModal}
          className="py-1 px-2 rounded-md bg-[#333] flex justify-center items-center cursor-pointer"
        >
          <PiDotsNineBold color="#fff" className="text-2xl" />
        </div>
      ) : (
        <NewListModal setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default NavBar;
