import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsHandIndexFill } from "react-icons/bs";
import { useDataContext } from "@/context/data/DataContext";

const BookmarkListModal = ({ setShowModal }) => {
  const { dataActions, listsData, bookmarksData } = useDataContext();
  const [selectedListId, setSelectedListId] = useState("");
  // handle bookmark
  const [newBookmarkItem, setNewBookmarkItem] = useState({
    id:bookmarksData.length +10,
    listId: "",
    category: "",
    name: "",
    url: "https://www.google.de/",
  });
  
  const [newBookmarkList, setNewBookmarkList] = useState({
    listId:listsData.length + 1,
    listName: "",
    top: 100,
    left: 100,
  });
  
  const handleSave = (e) => {
    e.preventDefault();
    dataActions.addNewList(newBookmarkList);
    dataActions.addBookmark(newBookmarkItem);
    setNewBookmarkList({
      listId: "",
      listName: "",
      top: 100,
      left: 100,
    });

    setShowModal(false);
  };

  const handleBookmarkItemChange = (e) => {
    setNewBookmarkItem({
      ...newBookmarkItem,
      name: e.target.value,
      listId: +selectedListId,
    });
  };

  const deleteHandle = () => {
    if (!selectedListId) return;
    const item = listsData.find((item) => +item.listId === +selectedListId);
    const bookmark = bookmarksData.find(
      (item) => +item.listId === +selectedListId
    );
    dataActions.deleteList(item.listId);
    dataActions.deleteBookmark(bookmark.id);
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
          onChange={(e) => setSelectedListId(e.target.value)}
          value={selectedListId}
        >
          <option
            value={""}
            className="px-2 py-1 bg-white rounded-md hover:bg-yellow"
          >
            Choose --
          </option>
          {listsData.map((item, index) => (
            <option
              key={index}
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
            onChange={handleBookmarkItemChange}
            type="text"
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
