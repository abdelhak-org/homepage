import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { useDataContext } from "@/context/data/DataContext";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function BookmarkItemModal({ listId, id, setToggle }) {
  const { dataActions, listsData } = useDataContext();
  const [isPending, setIsPending] = useState(false);
  const [newBookmark, setNewBookmark] = useState({ id: "", name: "", url: "" });

  const handleSave = (e) => {
    e.preventDefault();
    setIsPending(true);
    setToggle(false);
    dataActions.updateBookmark(listId, newBookmark);
  };
  
  const handleDelete = (e) => {
    e.preventDefault();
    dataActions.deleteBookmark(listId, id);
    setToggle(false);
  };

  useEffect(() => {
    const rerenderItem = () => {
      const list = listsData.find((list) => list.listId === listId);
      const targetBookmark = list.items.find((item) => item.id === id);
      setNewBookmark(targetBookmark);
    };
    rerenderItem();
  }, []);

  if (isPending) {
    return <p>isLoading........</p>;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-[#33333360]">
      <div className="w-[670px] h-[460px] transition duration-75 bg-gradient-to-r from-amber-300
       to-amber-500 rounded-md flex justify-center items-center relative">
        <div className="absolute top-1 right-1 my-1 cursor-pointer text-gray-700">
          <RiCloseCircleLine onClick={() => setToggle(false)} size={24} />
        </div>
        <div className="w-72 rounded-md p-2 space-y-1">
          <input
            value={newBookmark.name}
            onChange={(e) =>
              setNewBookmark((prevBookmark) => ({ ...prevBookmark, name: e.target.value }))
            }
            type="text"
            placeholder="Name"
            className="w-full h-full bg-gray-100 rounded-md p-2 text-md  outline-0
            focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm tracking-wide"
          />
          <input
            value={newBookmark.url}
            onChange={(e) =>
              setNewBookmark((prevBookmark) => ({ ...prevBookmark, url: e.target.value }))
            }
            type="text"
            placeholder="Url"
            className="w-full h-full bg-gray-100 rounded-md p-2 text-md  outline-0
            focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 sm:text-sm tracking-wide"
          />
          <div className="flex justify-center my-1 gap-2">
            <button
              onClick={handleDelete}
              className="text-gray-900 text-lg px-2 py-1  rounded-l-md bg-white"
            >
              <MdDelete size={22} />
            </button>
            <button
              onClick={handleSave}
              className="text-gray-700 text-lg px-2 py-1  rounded-r-md  bg-white"
            >
              <FaSave size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookmarkItemModal;
