"use client";
import { useEffect, useRef, useState } from "react";
import BookmarkItem from "./BookmarkItem";
import Menu from "../Menu";
import BookmarkForm from "../BookmarkForm";
import { useDrop, useDrag } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useUiContext } from "@/context/ui/UiContext";
import  {useDataContext} from "@/context/data/DataContext"
import OptionsMenu from "./OptionsMenu";

////
const BookmarkList = ({ data, listCategory, listId }) => {
  const { dataActions } = useDataContext();
  const [showForm, setShowForm] = useState(false);
  const [collapse, setCollapse] = useState(true);

  //create drop hook
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
        onClick={() => setCollapse(!collapse)}
        className="w-full my-2 text-center shadow-md capitalize font-script font-bold text-xl cursor-pointer"
      >
        {listCategory}
      </h6>



   {collapse &&
        <>
          <ul>
            {data
              .filter((item) => item.listId === listId)
              .map((item) => {
                return (
                  <BookmarkItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    listId={item.listId}
                    url={item.url}
                    icon={item.icon}
                  />
                );
              })}
          </ul>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 border block mx-auto border-dashed "
            >
              add
            </button>
            <BookmarkForm
              showForm={showForm}
              setShowForm={setShowForm}
              listId={listId}
            />
          <OptionsMenu/>
        </>}
    </div>
  );
};

export default BookmarkList;
