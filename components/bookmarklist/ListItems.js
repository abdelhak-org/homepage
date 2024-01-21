import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { useDrop, useDrag } from "react-dnd";
import BookmarkItem from "./BookmarkItem";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";

const ListItems = ({ items ,listId }) => {
  const { dataActions ,listsData} = useDataContext();
 const data =  listsData.find((list)=>list.listId === listId)
  const [cards, setCards] = useState(items);
  // HANDLE DRAG DROP
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  },[]);
// usedrop 
const [{ canDrop, isOver }, drop]  = useDrop(() => ({
  accept: dropItemTypes.BOOKMARK,
  drop: (item) => {dataActions.moveBookmark( item, listId)},
  collect: (monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

  return (
    <div
    ref={drop}
    style={{
      backgroundColor: canDrop?"red": "",
    }}
    >
      {cards.map((ele, index) => (
        <BookmarkItem
          item={ele}
          index={index}
          key={index}
          moveCard={moveCard}
          listId={listId}
        />
      ))}
    </div>
  );
};

export default ListItems;
