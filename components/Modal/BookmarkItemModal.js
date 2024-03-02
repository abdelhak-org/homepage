import { useEffect, useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import {  MdOutlineClose } from "react-icons/md";
import ModalWrapper from "../layout/ModalWrapper";
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
    <ModalWrapper>
      <div className="flex justify-between text-gray-900 px-2">
        <h6 className="text-md">Update a Bookmark </h6>
        <MdOutlineClose
          onClick={() => setToggle(false)}
          className="cursor-pointer"
          size={22}
        />
      </div>
      <div className="w-full rounded-md p-2 space-y-1">
        <input
          value={newBookmark.name}
          onChange={(e) =>
            setNewBookmark((prevBookmark) => ({
              ...prevBookmark,
              name: e.target.value,
            }))
          }
          type="text"
          placeholder="Name"
          className="w-full   rounded-md px-2 text-md py-2    outline-0 my-2
            border border-spacing-2 border-gray-200 
            "
        />
        <input
          value={newBookmark.url}
          onChange={(e) =>
            setNewBookmark((prevBookmark) => ({
              ...prevBookmark,
              url: e.target.value,
            }))
          }
          type="text"
          placeholder="Url"
          className="w-full  rounded-md px-2 text-md py-2   outline-0 my-2
          border border-spacing-2 border-gray-200 "
        />
        <div className="flex justify-center my-1 gap-2">
          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-l-md bg-gray-100  text-gray-900  text-sm"
            >
              Delete
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-r-md bg-gray-100  text-gray-900  text-sm"
            >
              Save 
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default BookmarkItemModal;
