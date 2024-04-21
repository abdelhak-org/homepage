"use client ";
import { useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { MdOutlineClose } from "react-icons/md";
import ModalWrapper from "@/components/layout/ModalWrapper";

const initialBookmarkList = {
  listId: Math.random() * 1000,
    listName: "",
    items: [  ],
};

export default function NewListModal() {
  const [showModal, setShowModal] = useState(false);
  const { dataActions } = useDataContext();
  const [newBookmarkList, setNewBookmarkList] = useState(initialBookmarkList);

 
    const handleSave = () => {
    dataActions.addNewList(newBookmarkList);
    setNewBookmarkList(initialBookmarkList);
    setShowModal(false);
  };
  const closeHandler = () => {
    setNewBookmarkList(initialBookmarkList);
    setShowModal(false);
  };
  if (!showModal) {
    return (
      <button
        className="py-3 px-4 capitalize rounded-md bg-blue-500 text-white 
        text-sm font-semibold font-josefin cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        add New List
      </button>
    );
  }

  return (
    <ModalWrapper
      isOpen={setShowModal}
      closeHandler={closeHandler}
      saveHandler={handleSave}
    >
      
      <div className="flex justify-between text-neutral-900  ">
        <h6 className="text-sm text-neutral-700">Add a List</h6>
        <MdOutlineClose
          onClick={() => setShowModal(false)}
          className="cursor-pointer text-neutral-900 font-normal hover:bg-neutral-300  
         "
          size={22}
        />
      </div>

        <div className="w-full bg-white mt-1 rounded-md">
          <input
            onChange={(e) =>
              setNewBookmarkList({
                ...newBookmarkList,
                listName: e.target.value,
              })
            }
            name="listName"
            placeholder="add new list"
            value={newBookmarkList.listName}
            type="text"
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
