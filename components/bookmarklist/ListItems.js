import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { useDrop } from "react-dnd";
import BookmarkItem from "./BookmarkItem";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";
import { PiCardsLight } from "react-icons/pi";

const ListItems = ({items, listId  ,listIndex   }) => {
  const { dataActions, listsData } = useDataContext();
  const [isPending , setIsPending] = useState(false)
  const [cards, setCards] = useState(items);
  // HANDLE DRAG 
  /*
  const moveItem = useCallback( (fromIndex, toIndex) => {
    const newItems = [...cards];
    const movedItem = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setCards(newItems);
  },[cards]);
*/
const moveCard = useCallback((dragIndex, hoverIndex) => {
  setCards((prevCards) =>
    update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex]],
      ],
    }),
  )
  
}, [cards])
console.log(cards)
  useEffect(()=>{
    setIsPending(true)
  ///  const list = listsData.find((list) => list.listId === listId).items;
    setCards([...items])
    setIsPending(false)
  },[listsData , setCards ])
  if (isPending) {
    return(
      <h3 className="text-5xl font-bold text-black text-center">is Loading ........</h3>
    )
  }
  return (
    <div >
      {cards.map((ele, index) => (
        <BookmarkItem
          item={ele}
          index={index}
          key={index}
          listId={listId}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};

export default ListItems;