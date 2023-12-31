"use client";
import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { useUiContext } from "@/context/ui/UiContext";
import { motion } from "framer-motion";
import BookmarkItem from "./BookmarkItem";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";
import OptionsMenu from "./OptionsMenu";
import SortedList from "./SortedList";

const style = {
  position: "absolute",

  padding: "0.5rem 1rem",
  cursor: "move",
};

const BookmarkList = ({ listCategory, listId, id, top, left  }) => {
  const { dataActions, bookmarksData, listsData } = useDataContext();
  const { uiData } = useUiContext();
  const [showForm, setShowForm] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const items = bookmarksData.filter((item) => item.listId === listId);

  const [isOver, drop] = useDrop(() => ({
    accept: dropItemTypes.BOOKMARK,
    drop: (item) => {
      dataActions.moveBookmark(item.id, listId);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: dropItemTypes.LIST,
      item: { listId, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );

  return (
    <div
      ref={(node) => drag(drop(node))}
      className="min-w-[260px] bookmarklist_container absolute   h-fit border m-8 border-gray  rounded-md   "
      style={{
        top,
        left,
      }}
    >
      <div
        style={{ backgroundColor: uiData.bookmarkHeaderColor }}
        className="flex justify-between content-center px-2 py-1 relative "
      >
        <h6
          data-testid="header_6"
          onClick={() => setCollapse(!collapse)}
          className="w-full my-2 text-center  font-bold text-md cursor-pointer capitalize font-roboto"
        >
          {listCategory}
        </h6>
        <OptionsMenu />
      </div>

      {collapse && (
        <>
          <ul
            className="flex flex-col gap-2 py-2 px-2  "
            variants={container}
            initial="hidden"
            animate="visible"
            ref={drop}
          >
            
{            //    <SortedList items ={items} listId={listId}/>
}            
   {items.map((item, index) => {
              return (
                <BookmarkItem
                  id={item.id}
                  index={index}
                  key={item.id}
                  name={item.name}
                  listId={item.listId}
                  url={item.url}
                  itemsVariants={item}
                />
              );
            })}
            
          </ul>
        </>
      )}
    </div>
  );
};

export default BookmarkList;
/*
   {items.map((item, index) => {
              return (
                <BookmarkItem
                  id={item.id}
                  index={index}
                  key={item.id}
                  name={item.name}
                  listId={item.listId}
                  url={item.url}
                  itemsVariants={item}
                />
              );
            })}




     <BookmarkItem
                    id={item.id}
                    index ={index}
                    key={item.id}
                    name={item.name}
                    listId={item.listId}
                    url={item.url}
                    itemsVariants={item}
                  />
    <button
                        onClick={() => setShowForm(true)}
                        className="px-4 py-2 border block mx-auto border-dashed "
                    >
                        add
                    </button>
                    {showForm ? (
                        <BookmarkForm setShowForm={setShowForm} listId={listId}/>
                    ) : (
                        ""
                    )}



*/
const container = {
  hidden: { opacity: 0.5, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
