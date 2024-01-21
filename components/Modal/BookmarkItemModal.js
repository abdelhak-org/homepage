"use client";
import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDataContext } from "@/context/data/DataContext";
function BookmarkItemModal({ listId ,id, setToggle }) {

  const { dataActions , listsData } = useDataContext();
  const [bookmark, setbookmark] = useState({id :"" , name:"" , url:"" });

  const [newBookmark, setNewBookmark] = useState({id:"" , name:"" , url:""});

  
  const handleSave = (e) => {
    e.preventDefault()
    dataActions.updateBookmark(listId,newBookmark);
    setToggle(false);
  };
  const handleDelete = (e) => {
    e.preventDefault()
    dataActions.deleteBookmark(listId ,  id);
    setToggle(false)  ;   


  };
  useEffect(()=>{
    function rerenderItem(){
      const list  = listsData.find(list => list.listId === listId );
      const targetBookmark = list.items.find((item)=> item.id === id)
      setNewBookmark(targetBookmark)
    }
   rerenderItem()
  },[])
  return (
    <div className="fixed  top-0 left-0 w-full h-full z-30 flex items-center justify-center bg-black">
      <div className="flex relative flex-col bg-x  gap-3 px-4 pt-2 pb-4 z-40 rounded-md">
        <div className="flex justify-between items-center  ">
          <p className="text-sm block pt-1 font-bold">Edit Bookmark Modal</p>
          <RiCloseCircleLine 
          onClick={()=>setToggle(false)}
          size={24} />
        </div>

        <input
          value={newBookmark.name}
          onChange={(e) =>
            setNewBookmark({ ...newBookmark, name: e.target.value })
          }
          type="text"
          placeholder="Name"
          className="rounded-md px-2 py-1"
        />
        <input
          value={newBookmark.url}
          onChange={(e) =>
            setNewBookmark({ ...newBookmark, url: e.target.value })
          }
          type="text"
          placeholder="Url"
          className="rounded-md px-2 py-1"
        />
        <div className="flex justify-between gap-2">
          <button
            onClick={handleDelete}
            className="grow bg-pink text-white text-sm p-2 rounded-md"
          >
            Delete
          </button>
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
}

export default BookmarkItemModal;
