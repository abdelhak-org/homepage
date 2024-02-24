import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDataContext } from "@/context/data/DataContext";
import { FaSave } from "react-icons/fa";

function NewItemModal({ selectedListId,showItemModal ,  setShowItemModal }) {
  const { dataActions } = useDataContext();
  const [newBookmark, setNewBookmark] = useState({ id:Math.random() * 100, name: "", url: "" });

  const handleSave = (e) => {
    e.preventDefault();
    console.log(newBookmark , selectedListId)
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
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-[#33333360]">
      <div className="w-[670px] h-[460px] transition duration-75 bg-gradient-to-r from-amber-300
            to-amber-500 rounded-md flex justify-center items-center relative">
        <div className="absolute top-1 right-1 my-1 cursor-pointer text-gray-700">
          <RiCloseCircleLine onClick={()=>setShowItemModal(!showItemModal)} size={24} />
        </div>
        <div className="w-72 rounded-md p-2 space-y-1">
          <input
            value={newBookmark.name}
            onChange={(e) => handleChange(e, "name")}
            type="text"
            placeholder="Name"
            className="w-full h-full bg-gray-100 rounded-md p-2 text-md outline-0
                        focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2
                         focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm tracking-wide"
          />
          <input
            value={newBookmark.url}
            onChange={(e) => handleChange(e, "url")}
            type="text"
            placeholder="Url"
            className="w-full h-full bg-gray-100 rounded-md p-2 text-md outline-0
                        focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 
                      focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm tracking-wide"
          />
          <div className="flex justify-center my-1 gap-2">
            <button
              onClick={handleSave}
              className="text-gray-700 text-lg px-2 py-1 rounded-r-md bg-white"
            >
              <FaSave size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewItemModal;
