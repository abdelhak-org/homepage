import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDataContext } from "@/context/data/DataContext";

const BookmarkListModal = ({ setShowModal }) => {
  const { dataActions, listsData  } = useDataContext();
  const [selectedListId, setSelectedListId] = useState(null);
  const [newBookmark, setNewBookmark] = useState({id:"", name:"", url:""});
  // handle bookmark List  

  
  const [newBookmarkList, setNewBookmarkList] = useState({
    listId:listsData.length + 1,
    listName: "",
    items:[ ]
  
  });
  
  const handleSave = (e) => {
    e.preventDefault();
  
    dataActions.addNewList(newBookmarkList);
    dataActions.addBookmark(newBookmark , selectedListId)
    setNewBookmarkList({
      listId: "",
      listName: "",
      items:[] ,
    });
  
    setShowModal(false);
  };

 const deleteHandle = () => {
    if (!selectedListId) return;
    const item = listsData.find((list) => list.listId === selectedListId);
  
    dataActions.deleteList(item.listId);
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center bg-black">
      <div className="flex relative flex-col bg-x gap-3 px-4 pt-2 pb-4 z-40 rounded-md">
        <div className="flex justify-between items-center">
          <p className="text-sm block pt-1 font-bold">ADD BookmarkMark</p>
          <RiCloseCircleLine 
          onClick={(()=>  setShowModal(false))}
          size={24} />
        </div>

        <select
          className="p-2 rounded-md bg-white outline-0 capitalize"
          onChange={(e) => setSelectedListId(+e.target.value)}
          value={selectedListId}
        >
          <option
            className="px-2 py-1 bg-white rounded-md hover:bg-yellow"
          >
            Choose --
          </option>
          {listsData.map((item, index) => (
            <option
              key={index}
              categoryIndex ={index}
              value={item.listId}
              className="px-2 py-1 bg-white rounded-md hover:bg-yellow"
            >
              {item.listName}
            </option>
          ))}
        </select>
        
        {
          !selectedListId &&
          (
            <input
            onChange={(e) =>
              setNewBookmarkList({ ...newBookmarkList, listName: e.target.value })
            }
            type="text"
            placeholder="New BookmarkList"
            className="rounded-md px-2 py-1 outline-0"
          />
          )
        }
      
        {
          selectedListId &&
          (
            <input
            type="text"
            value={newBookmark.name}
            onChange={(e) => setNewBookmark({ ...newBookmark, name: e.target.value })}
            placeholder="New BookmarkItem"
            className="rounded-md px-2 py-1 outline-0"
          />
          )
        }
       

        <div className="flex justify-between gap-2">
          {selectedListId && (
            <button
              onClick={deleteHandle}
              className="grow bg-pink text-white text-sm p-2 rounded-md"
            >
              Delete
            </button>
          )}
          <button
            onClick={handleSave}
            className="grow bg-green text-white text-sm p-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkListModal;
