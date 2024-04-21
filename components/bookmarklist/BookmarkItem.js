"use client";

import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import UpdateBookmarkModal from "../Modal/UpdateBookmarkModal.js";
const BookmarkItem = ({ item, index, listId }) => {
  const { dataActions } = useDataContext();
  const { uiData, actions: uiActions } = useUiContext();
  const  ref = useRef(null);


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
       <div
       //  href={item.url} target="_blank"
        ref={drag(drop(ref))}
        data-testid="bookmark-item-test"
        style={style}
        className="relative flex justify-between my-1 items-center p-2 text-sm 
        shadow-md hover:drop-shadow-lg tracking-wide
        rounded-md border border-solid border-gray-light font-roboto text-gray "
      >
        <div className="p-1 text-lg">
           <img height="24" width="24" src={`https://www.google.com/s2/favicons?sz=64&domain_url=${item.url}`} alt="logo" /> 
        </div>
        <span>
          {item.name}
        </span>
        <UpdateBookmarkModal id={item.id}  listId={listId} />
      </div>
      
    
    </>
  );
};

export default BookmarkItem;
