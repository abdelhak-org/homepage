"use client";

import React, { useState, useEffect } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { MdOutlineClose } from "react-icons/md";
import ModalWrapper from "../layout/ModalWrapper";
import { TbPencil } from "react-icons/tb";
const initialBookmark = {
  id: "",
  name: "",
  url: "",
};
function UpdateBookmarkModal({ listId, id }) {
  const [toggle, setToggle] = useState(false);
  const { dataActions, listsData } = useDataContext();
  const [updatedBookmark, setUpdatedBookmark] = useState(initialBookmark);

  const handleSave = () => {
    dataActions.updateBookmark(listId, updatedBookmark);
    setUpdatedBookmark(initialBookmark);
    setToggle(false);
  };

  const closeHandler = () => {
    setUpdatedBookmark(initialBookmark);

    setToggle(false);
  };
  const deleteHandler = () => {
    dataActions.deleteBookmark(listId, id);
    setToggle(false);
  };

  useEffect(() => {
    const bookmark = listsData
      .find((list) => list.listId === listId)
      ?.items.find((item) => item.id === id);
    setUpdatedBookmark(bookmark);
  }, [listsData, id, listId, toggle]);

  if (!toggle) {
    return (
      <TbPencil
        onClick={() => setToggle(true)}
        className="w-4 h-4 cursor-pointer text-neutral-800"
      />
    );
  }

  return (
    <ModalWrapper
      isOpen={setToggle}
      closeHandler={closeHandler}
      saveHandler={handleSave}
    >
      <div className="flex justify-between text-neutral-900  ">
        <h6 className="text-sm text-neutral-700">Update a Bookmark</h6>
        <MdOutlineClose
          onClick={closeHandler}
          className="cursor-pointer text-neutral-900 font-normal hover:bg-neutral-300 "
          size={22}
        />
      </div>

      <div className="w-full bg-white mt-1 rounded-md">
        <input
          value={updatedBookmark.name}
          onChange={(e) =>
            setUpdatedBookmark((prevBookmark) => ({
              ...prevBookmark,
              name: e.target.value,
            }))
          }
          type="text"
          placeholder="Name"
          className="w-full rounded-md px-4 text-md py-2  outline-0 my-2
          border border-spacing-2 border-transparent border-b-neutral-700 bg-neutral-200 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            placeholder:text-neutral-500 "
        />
      </div>
      <div className="w-full bg-white mt-1 rounded-md">
        <input
          value={updatedBookmark.url}
          onChange={(e) =>
            setUpdatedBookmark((prevBookmark) => ({
              ...prevBookmark,
              url: e.target.value,
            }))
          }
          type="text"
          placeholder="Url"
          className="w-full rounded-md px-4 text-md py-2  outline-0 my-2
          border border-spacing-2 border-transparent border-b-neutral-700 bg-neutral-200 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
            placeholder:text-neutral-500 "
        />
      </div>
      <div className="flex justify-between  items-center py-4  space-x-4">
        <button
          onClick={deleteHandler}
          className=" py-2 w-[50%]  rounded-md bg-red-500 font-bold tracking-wide
           text-neutral-100 text-md"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 flex-grow rounded-md  bg-blue-500 font-bold tracking-wide
           text-neutral-100 text-md"
        >
          Save
        </button>
      </div>
    </ModalWrapper>
  );
}

export default UpdateBookmarkModal;
