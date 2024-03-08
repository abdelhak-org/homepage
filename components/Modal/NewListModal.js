"use client ";
import { Fragment, useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useDataContext } from "@/context/data/DataContext";
import { MdOutlineClose } from "react-icons/md";
import ModalWrapper from "@/components/layout/ModalWrapper";

export default function NewListModal() {
  const [showModal, setShowModal] = useState(false);
  // const [onClose, setOnClose] = useState(false);
  const { dataActions } = useDataContext();
  const [newBookmarkList, setNewBookmarkList] = useState({
    listId: Math.random() * 1000,
    listName: "",
    items: [
      {id:Math.random() * 1000, name:"default"  ,url:"https://www.google.com"} 

    ],
  });
  
  const handleSave = () => {

    dataActions.addNewList(newBookmarkList);
    setNewBookmarkList({
      listId: Math.random() * 1000,
      listName: "",
      items: [
        {id:Math.random() * 1000, name:"default"  ,url:"https://www.google.com"} 
      ],
    });
     setShowModal(false);
  };
  const closeHandler = () => {
    setNewBookmarkList({
      listId: Math.random() * 1000,
      listName: "",
      items: [],
    });
    setShowModal(false);
  };
  ;
  if (!showModal) {
    return (
      <button
        className="py-2 px-4 capitalize rounded-md bg-blue-600 text-white text-center text-sm font-semibold font-josefin cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        add New List
      </button>
    );
  }

  return (
    <ModalWrapper isOpen={setShowModal} closeHandler={closeHandler} saveHandler={handleSave}>
      <div className="flex justify-between text-gray-900">
        <h6 className="text-md">Add a List</h6>
        <MdOutlineClose
          onClick={() => setShowModal(false)}
          className="cursor-pointer"
          size={22}
        />
      </div>
      <div className="">
        <div className="w-full bg-white mt-1 rounded-md">
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            show={true}
          >
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
              className="w-full rounded-md px-2 text-md py-2 capitalize outline-0 my-2 border border-spacing-2 border-gray-200"
            />
          </Transition>
        </div>
      </div>
      <div className="flex justify-end space-x-2 py-2 my-0">
        <button
        onClick={closeHandler}
          className="px-4 py-2 rounded-md bg-blue-500 font-bold tracking-wide text-gray-900 text-sm"
        >
          Save
        </button>
      </div>
    </ModalWrapper>
  );
}
