"use client";
import { useMemo, useState } from "react";
import BookmarkItem from "./BookmarkItem";
import { FiSettings } from "react-icons/fi";
import { BsDoorClosed } from "react-icons/bs";
import BookmarkForm from "../BookmarkForm";
import { useDrop } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";
import { useUiContext } from "@/context/ui/UiConext";


const BookmarkList = ( { listId } ) => {


  const [isAdded, setIsAdded] = useState( false );
  const [collapsed, setCollapsed] = useState( false );
  const { actions: uiActions } = useUiContext();

  const { actions, bookmarksData } = useDataContext()

  const [isOver, drop] = useDrop( () => ( {
    accept: dropItemTypes.BOOKMARK,
    drop: ( item ) => actions.moveBookmark( item.id, listId ),
    collect: ( monitor ) => ( {
      isOver: !!monitor.isOver(),
    } ),
  } ) );

  const bookmarksToShow = bookmarksData
    .filter( ( bookmark ) => bookmark.listId === listId )

  return (
    <div
      ref={drop}
      className="w-60 h-fit border m-8 border-blue-200 bg-slate-50 rounded-md relative "
    >
      <h6

        onClick={() => setIsClose( !isCLose )}
        className="w-full my-2 text-center shadow-md capitalize font-script font-bold text-xl cursor-pointer"
      >
        {listCategory}
      </h6>

      {!collapsed && (
        <>
          <ul>
            {bookmarksToShow}
          </ul>
          {!isAdded ? (
            <button
              onClick={() => setIsAdded( !isAdded )}
              className="px-4 py-2 border block mx-auto border-dashed "
            >
              add
            </button>
          ) : (
            <BookmarkForm
              isAdded={isAdded}
              setIsAdded={setIsAdded}
              listId={listId}
            />
          )}



          <OptionsMenu />
        </>
      )}
    </div>
  );
};

export default BookmarkList;
