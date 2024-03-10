import React, { useState, useEffect } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { MdOutlineClose } from "react-icons/md";
import ModalWrapper from "../layout/ModalWrapper";
import { TbPencil } from "react-icons/tb";

function BookmarkItemModal({ listId, id }) {
  const [toggle, setToggle] = useState(false);
  const { dataActions, listsData } = useDataContext();
  const [updatedBookmark, setUpdatedBookmark] = useState({
    id: "",
    name: "",
    url: "",
  });
  
  const handleSave = () => {
    dataActions.updateBookmark(listId, updatedBookmark);
    setToggle(false);
  };
  
  const closeHandler = () => {
    setUpdatedBookmark({ id: "", name: "", url: "" });
    
    setToggle(false);
  };
  
  
  useEffect(() => {
    const bookmark = listsData
      .find((list) => list.listId === listId)
      ?.items.find((item) => item.id === id);
    setUpdatedBookmark(bookmark);
  }, [listsData, listId, id]);
  
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
      <div className="flex justify-between text-neutral-900">
        <h6 className="text-md">Update a Bookmark</h6>
        <MdOutlineClose
          onClick={() => setToggle(false)}
          className="cursor-pointer"
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
          className="w-full rounded-md px-4 text-md py-2  outline-0 my-2 border border-spacing-2
           border-gray-300 bg-neutral-100  focus:ring-2 focus:ring-blue-500"
        />
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
          className="w-full rounded-md px-4 text-md py-2  outline-0 my-2 border border-spacing-2
           border-gray-300 bg-neutral-100  focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end space-x-2 py-2 my-0">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-blue-500 font-bold tracking-wide text-neutral-100 text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default BookmarkItemModal;
