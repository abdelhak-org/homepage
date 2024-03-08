'use client'

import { useEffect, useState , useRef } from "react";
import { useDataContext } from "@/context/data/DataContext";
import {  MdOutlineClose } from "react-icons/md";
import ModalWrapper from "../layout/ModalWrapper";
import useOnClickOutside from "@/hooks/useClickOutside";
import { TbPencil } from "react-icons/tb";

function BookmarkItemModal({ listId, id }) {
  const [toggle, setToggle] = useState(false);

  const { dataActions, listsData } = useDataContext();
  const [newBookmark, setNewBookmark] = useState({ id: "", name: "", url: "" });
  const ref = useRef();
  useOnClickOutside(ref, () => setToggle(false));
  
  
  const handleSave = (e) => {
    e.preventDefault();
    setIsPending(true);
    setToggle(false);
    dataActions.updateBookmark(listId, newBookmark);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dataActions.deleteBookmark(listId, id);
    setToggle(false);
  };



if(!toggle){
  return(
    <TbPencil
    onClick={()=> setToggle(true)}
    className="w-4 h-4 cursor-pointer text-neural-800"
  />

  )
}


  return (
    <ModalWrapper >
      <div 
      ref={ref}
      className="flex justify-between text-gray-900 px-2">
        <h6 className="text-md">Update a Bookmark </h6>
        <MdOutlineClose
          onClick={() => setToggle(false)}
          className="cursor-pointer"
          size={22}
        />
      </div>
      <div className="w-full rounded-md p-2 space-y-1">
        <input
          value={newBookmark.name}
          onChange={(e) =>
            setNewBookmark((prevBookmark) => ({
              ...prevBookmark,
              name: e.target.value,
            }))
          }
          type="text"
          placeholder="Name"
          className="w-full   rounded-md px-2 text-md py-2    outline-0 my-2
            border border-spacing-2 border-gray-200 
            "
        />
        <input
          value={newBookmark.url}
          onChange={(e) =>
            setNewBookmark((prevBookmark) => ({
              ...prevBookmark,
              url: e.target.value,
            }))
          }
          type="text"
          placeholder="Url"
          className="w-full  rounded-md px-2 text-md py-2   outline-0 my-2
          border border-spacing-2 border-gray-200 "
        />
        <div className="flex justify-center my-1 gap-2">
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-l-md bg-gray-100  text-gray-900  text-sm"
            >
              Delete
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-r-md bg-gray-100  text-gray-900  text-sm"
            >
              Save 
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default BookmarkItemModal;
