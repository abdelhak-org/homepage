import Link from "next/link";
import { useUiContext } from "../context/ui/UiContext";
import NewListHandle from "./NewListHandle";
import { useState } from "react";
import BookmarkListModal from "./Modal/BookmarkListModal";
const NavBar = () => {
  const [showModal , setShowModal] = useState(false)
  const { uiData } = useUiContext();

  return (
    <div
      className="w-screen h-screen md:max-w-[1534px] mx-auto   px-8 underline underline-offset-2 flex flex-col 
        justify-center md:justify-between items-center md:flex-row font-roboto   
        text-lg font-light md:h-[55px] md:flex-wrap"
    >
      <h3 className="font-script text-8xl mb-8 md:text-4xl md:m-0 text-gray  font-bold ">
        <Link href="/"> HomePage</Link>
      </h3>
      { ! showModal ? <button onClick={()=> setShowModal(!showModal)}>Add Newlist</button> :<BookmarkListModal/> }
    </div>
  );
};

export default NavBar;
