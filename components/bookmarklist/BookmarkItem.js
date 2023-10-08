"use client";

import BookmarkForm from "../BookmarkForm";
import { useDrag } from "react-dnd";
import Link from "next/link";
import { dropItemTypes } from "@/dropItemTypes";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";
const BookmarkItem = ({ name, id, isAdded, setIsAdded, listId, url }) => {
    
  const [{isDragging}, drag] = useDrag({
    type: dropItemTypes.BOOKMARK,
    item: {
      name,
      id,
      listId,
      url,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const { uiData } = useUiContext();
  const {} = useDataContext();

  const { dataActions } = useDataContext();

  return (
    <>
      <li
        ref={drag}
        style={{
          background: uiData.bookmarkColor,
          fontSize: uiData.fontS,
          opacity: isDragging ? 0.5 : 1,
        }}
        className="px-4 py-2 w-fit flex items-center
        border border-dashed m-2 font-josefin   border-blue-200 relative "
      >
        <Link href={url} target="_blank">
          {name}
        </Link>
        <span
          onClick={() => dataActions.deleteBookmark(id)}
          className="absolute -top-2 right-0 p-1 text-pink"
        >
          x
        </span>
      </li>
      {isAdded && <BookmarkForm setIsAdded={setIsAdded} listId={listId} />}
    </>
  );
};

export default BookmarkItem;
