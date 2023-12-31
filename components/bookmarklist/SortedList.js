import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import BookmarkItem from "./BookmarkItem";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";

const SortedList = ({ items, listId }) => {
    const {  dataActions } = useDataContext();
  
    const [, drop] = useDrop(() => ({
      accept: dropItemTypes.BOOKMARK ,
      drop: (item, monitor) => {
        const dragIndex = item.index;
        const hoverIndex = items.length;
        dataActions.moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    }));



  return (
    <div ref={drop} className="bg-blue p-4">
      {items.map((item, index) => (
        <BookmarkItem
          id={item.id}
          index={index}
          key={item.id}
          name={item.name}
          listId={item.listId}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default SortedList;
