"use client";

import { useTheme } from "@/hooks/useTheme";
import BookmarkForm from "../BookmarkForm";
import { useData } from "@/hooks/useData";
import { useDrag } from "react-dnd";
import Link from "next/link";
import { dropItemTypes } from "@/dropItemTypes";
const BookmarkItem = ({ name, id, isAdded, setIsAdded, listId, url , icon }) => {



  //////
  const [{ isDragging }, drag] = useDrag({
    type:dropItemTypes.BOOKMARK,
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

  const { bookmarkColor, fontS } = useTheme();
  const { deleteBookmark } = useData();

  return (
    <>
      <li
        ref={drag}
        style={{
          background: bookmarkColor,
          fontSize: fontS,
          opacity: isDragging ? 0.5 : 1,
        }}
        className="px-4 py-2 w-fit flex items-center
        border border-dashed m-2 font-josefin   border-blue-200 relative "
      >
        <span className="mr-1" > {icon} </span>
        <Link href={url} target="_blank">
      
          {name}
        </Link>
        <span
          onClick={() => deleteBookmark(id)}
          className="absolute -top-2 right-0 p-1 text-pink"
        >
          x
        </span>
      </li>
      {isAdded && <BookmarkForm setIsAdded={setIsAdded} listId={listId}/>}
    </>
  );
};

export default BookmarkItem;
