" use client ";
import update from "immutability-helper";
import { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import NewListForm from "@/components/NewListForm";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";
import Link from "next/link";



export default function Home() {
   const [showListForm, setShowListForm] = useState(false);
  const { uiData } = useUiContext();
  const { bookmarksData, listsData, addNewList } = useDataContext();
  ////
  const [boxes, setBoxes] = useState(listsData);
  console.log(boxes)
  const moveBox = useCallback(
    (id, left, top) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: "box",
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div
      ref={drop}
      style={{
     
        background: uiData.bgColor,
      }}
      className={`main_container w-screen  relative flex gap-5  flex-col md:max-w-[1534px] md:flex-row min-h-screen mx-auto 
           items-center justify-around flex-wrap `}
    >
      { boxes.map((box, index) => {
        const { listName, listId, top, left } = box
        return (
          <BookmarkList
            listCategory={listName}
            listId={listId}
            key={index}
            index={index}
            id={index}
            top={top}
            left={left}
          />
        );
      })}
        {showListForm && (
          <NewListForm
            addNewList={addNewList}
            setShowListForm={setShowListForm}
            showListForm={showListForm}
          />
        )}

        {!showListForm && (
          <button
            onClick={() => setShowListForm(!showListForm)}
            className="px-4 py-2 border rounded-md border-dotted text-white absolute
            font-josefin bg-green   mb-4  right-2 top-20" 
          >
            ADD NEW LIST
          </button>
        )}
    </div>
  );
}

/*
  {showListForm && (
          <NewListForm
            addNewList={addNewList}
            setShowListForm={setShowListForm}
            showListForm={showListForm}
          />
        )}

        {!showListForm && (
          <button
            onClick={() => setShowListForm(!showListForm)}
            className="px-4 py-2 border rounded-md border-dotted text-white 
            font-josefin bg-green   mb-4"
          >
            ADD NEW LIST
          </button>
        )}
        */
