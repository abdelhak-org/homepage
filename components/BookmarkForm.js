"use client";

import React, { useState } from "react";
    
import { useDataContext } from "@/context/data/DataContext";
const BookmarkForm = ({  listId  , setShowForm}) => {
  const { dataActions } = useDataContext();
  const [bookmark, setBookmark] = useState({
    name: "",
    id: Math.random(),
    listId: listId,
    url: "",
  });
      
  const handleSubmit = (e) => {
    e.preventDefault();
    dataActions.addBookmark(bookmark);
    setBookmark({ name: "", id: Math.random(), listId: listId, url: "" });
    setShowForm(false)
  };
      
  return (
    <>
        <form
          data-testid="bookmark-form-test"
          onSubmit={handleSubmit}
          className="w-full p-2 border border-gray rounded-sm border-dashed"
        >
          <label>
            <span> Name:</span>
            <input
              className="w-full py-1 px-2 text-sm border border-dotted rounded-sm outline-none "
              onChange={(e) =>
                setBookmark({ ...bookmark, name: e.target.value })
              }
              value={bookmark.name}
              type="text"
              placeholder="Enter The Name "
            />
          </label>
          <label>
            <span> URL:</span>
            <input
              className="w-full py-1 px-2 text-sm border border-dotted rounded-sm outline-none "
              onChange={(e) =>
                setBookmark({ ...bookmark, url: e.target.value })
              }
              value={bookmark.url}
              type="text"
              placeholder="Enter The URL"
            />
          </label>
          <button
            type="submit"
            className="p-1 mx-auto block text-green font-bold tracking-wide"
          >
            Confirm
          </button>
        </form>
    </>
  );
};

export default BookmarkForm;
