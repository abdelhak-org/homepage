"use client";

import React, { useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { generateUniqueId } from "@/utils/generateUniqueId";

const BookmarkForm = ( { setIsAdded, isAdded, listId } ) => {
  const { actions } = useDataContext();
  const [bookmark, setBookmark] = useState( {
    name: "",
    id: generateUniqueId(),
    listId: listId,
    url: "",
  } );
  const [isConfirmed, setIConfirmed] = useState( true );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setIConfirmed( !isConfirmed )
    setIsAdded( !isAdded )
    actions.addBookmark( bookmark )

  };

  return (
    <>
      {isConfirmed && (
        <form
          onSubmit={handleSubmit}
          className="w-full p-2 border border-gray rounded-sm border-dashed"
        >
          <label>
            <span> Name:</span>
            <input
              className="w-full py-1 px-2 text-sm border border-dotted rounded-sm outline-none "
              onChange={( e ) =>
                setBookmark( { ...bookmark, name: e.target.value } )
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
              onChange={( e ) =>
                setBookmark( { ...bookmark, url: e.target.value } )
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
      )}
    </>
  );
};

export default BookmarkForm;
