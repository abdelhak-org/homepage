import React, { useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDataContext } from "@/context/data/DataContext";
import { FaSave } from "react-icons/fa";
import ModalWrapper from "../layout/ModalWrapper";
import { MdOutlineClose } from "react-icons/md";
import useOnClickOutside from "@/hooks/useClickOutside";

function NewItemModal({ selectedListId, showItemModal, setShowItemModal }) {
  const { dataActions } = useDataContext();
  const [newBookmark, setNewBookmark] = useState({
    id: Math.random() * 100,
    name: "",
    url: "",
  });
  const ref = useRef();
  useOnClickOutside(ref, () => setShowItemModal(false));
  const handleSave = (e) => {
    e.preventDefault();
    console.log(newBookmark, selectedListId);
    dataActions.addBookmark(selectedListId, newBookmark);
    setShowItemModal(false);
  };

  const handleChange = (e, field) => {
    setNewBookmark((prevBookmark) => ({
      ...prevBookmark,
      [field]: e.target.value,
    }));
  };

  return (
    <ModalWrapper>
      <div className="flex justify-between text-gray-900 px-2">
        <h6 className="text-md">Add a Bookmark </h6>
        <MdOutlineClose
          onClick={() => setShowItemModal(!showItemModal)}
          className="cursor-pointer"
          size={22}
        />
      </div>
      <div ref={ref} className="w-full  rounded-md p-2 space-y-1">
        <input
          value={newBookmark.name}
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="Name"
          className="w-full   rounded-md px-2 text-md py-2   capitalize outline-0 my-2
          border border-spacing-2 border-gray-200 
          "
        />
        <input
          value={newBookmark.url}
          onChange={(e) => handleChange(e, "url")}
          type="text"
          placeholder="Url"
          className="w-full   rounded-md px-2 text-md py-2   capitalize outline-0 my-2
          border border-spacing-2 border-gray-200 
          "
        />
        <div className="flex justify-center my-1 gap-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-gray-100 mt-2  text-gray-900  text-sm"
            >
            Save 
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default NewItemModal;
