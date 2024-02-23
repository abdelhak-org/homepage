"use client";
import { useUiContext } from "@/context/ui/UiContext";
import { TbPencil } from "react-icons/tb";
import BookmarkItemModal from "@/components/Modal/BookmarkItemModal";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { useDrag, useDrop } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { FcBookmark } from "react-icons/fc";
import Link from "next/link";
import axios from 'axios';

const BookmarkItem = ({ item, index, listId }) => {
  const [currentItem, setCurrentItem] = useState({});
  const { dataActions } = useDataContext();
  const [toggle, setToggle] = useState(false);
  const { uiData, actions: uiActions } = useUiContext();
  const ref = useRef(null);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleOpenModal = () => {
    uiActions.openModal(item.id);
  };

  const [{ isDragging }, drag] = useDrag({
    type: dropItemTypes.BOOKMARK,
    item: { item, index, sourcelistId: listId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: dropItemTypes.BOOKMARK,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop: (item, monitor) => {
      const droppedItem = monitor.getItem();
      dataActions.moveBookmark(droppedItem, listId, index);
    },
    hover: (item, monitor) => {},
  });

  const style = {
    cursor: "move",
    fontSize: uiData.fontS,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isOver ? "green" : "white",
  };

  console.log(item.url.slice(8), 'item.url');

  return (
    <>
      <li
        ref={drag(drop(ref))}
        data-testid="bookmark-item-test"
        style={style}
        className="relative flex justify-between my-1 items-center p-2 text-sm 
        shadow-md hover:drop-shadow-lg tracking-wide
        rounded-md border border-solid border-gray-light font-roboto text-gray "
      >
        <button className="p-1 text-lg">
           <img height="24" width="24" src={`https://api.statvoo.com/favicon/${item.url.slice(8 , -1)}`} /> 
        </button>
        <p>
          <Link href={item.url} target="_blank">{item.name}</Link>
        </p>
        <TbPencil
          onClick={toggleHandler}
          className="w-4 h-4 cursor-pointer text-gray"
        />
      </li>
      {toggle && (
        <BookmarkItemModal id={item.id} setToggle={setToggle} listId={listId} />
      )}
    </>
  );
};

export default BookmarkItem;
