import React, { useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import ModalWrapper from "../layout/ModalWrapper";
import { MdOutlineClose } from "react-icons/md";
const initialBookmark = {
  id: Math.random() * 100,
  name: "",
  url: "",
};
function NewItemModal({ selectedListId }) {
  const [showItemModal, setShowItemModal] = useState(false);
  const { dataActions } = useDataContext();
  const [newBookmark, setNewBookmark] = useState({ initialBookmark});
  const handleChange = (e, field) => {
    setNewBookmark((prevBookmark) => ({
      ...prevBookmark,
      [field]: e.target.value,
    }));
  };
  const handleSave = () => {
    if(!newBookmark.name || !newBookmark.url) return;
    dataActions.addBookmark(selectedListId, newBookmark);
    setNewBookmark(initialBookmark);
    setShowItemModal(false);
  };
  const closeHandler = () => {
    setNewBookmark(initialBookmark);
    setShowItemModal(false);
  };

  if (!showItemModal) {
    return (
      <button
        onClick={() => setShowItemModal(true)}
        className="text-xl float-right px-3  rounded-md bg-blue-500 font-bold tracking-wide mr-2 my-2 text-white "
      >
        +
      </button>
    );
  }

  return (
    <ModalWrapper
      isOpen={setShowItemModal}
      closeHandler={closeHandler}
      saveHandler={handleSave}
    >
      <div className="flex justify-between text-neutral-900 px-0 ">
        <h6 className="text-sm text-neutral-700">Add a Bookmark</h6>
        <MdOutlineClose
          onClick={() => setShowItemModal(false)}
          className="cursor-pointer text-neutral-900 font-normal
        hover:bg-neutral-300  "
          size={22}
        />
      </div>

      <div className="w-full bg-white mt-1 rounded-md">
        <input
          value={newBookmark.name}
          onChange={(e) => handleChange(e, "name")}
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
          value={newBookmark.url}
          onChange={(e) => handleChange(e, "url")}
          type="text"
          placeholder="Url"
          className="w-full rounded-md px-4 text-md py-2  outline-0 my-2
          border border-spacing-2 border-transparent border-b-neutral-700 bg-neutral-200 
            focus:ring-2 focus:ring-blue-500 focus:border-transparent
          placeholder:text-neutral-500 "
        />
      </div>

      <div className="flex justify-between  items-center py-4 space-x-4">
        <button
          onClick={closeHandler}
          className=" py-2 w-[50%]  rounded-md bg-neutral-500 font-bold tracking-wide
           text-neutral-100 text-md"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 flex-grow rounded-md bg-blue-500 font-bold tracking-wide
           text-neutral-100 text-md"
        >
          Save
        </button>
      </div>
    </ModalWrapper>
  );
}

export default NewItemModal;
