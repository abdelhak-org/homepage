"use client";
import { useState } from "react";
import BookmarkItem from "./BookmarkItem";
import BookmarkForm from "../BookmarkForm";
import { useDrop } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";
import OptionsMenu from "./OptionsMenu";

const BookmarkList = ({ listCategory, listId }) => {
  const { dataActions, bookmarksData } = useDataContext();
  const [showForm, setShowForm] = useState(false);
  const [collapse, setCollapse] = useState(true);

  const [isOver, drop] = useDrop(() => ({
    accept: dropItemTypes.BOOKMARK,
    drop: (item) => dataActions.moveBookmark(item.id, listId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="w-60 h-fit border m-8 border-blue-200 bg-slate-50 rounded-md relative "
    >
      <h6
        data-testid="header_6"
        onClick={() => setCollapse(!collapse)}
        className="w-full my-2 text-center shadow-md capitalize font-script font-bold text-xl cursor-pointer"
      >
        {listCategory}
      </h6>

      {collapse && (
        <>
          <ul>
            {bookmarksData
              .filter((item) => item.listId === listId)
              .map((item) => {
                return (
                  <BookmarkItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    listId={item.listId}
                    url={item.url}
                  />
                );
              })}
          </ul>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 border block mx-auto border-dashed "
          >
            add
          </button>
          {
            showForm ?
            <BookmarkForm
              setShowForm={setShowForm}
              listId={listId}
            />:""
          }
          <OptionsMenu />
        </>
      )}
    </div>
  );
};

export default BookmarkList;