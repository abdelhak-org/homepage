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
      
        />
      ))}
    </div>
  );
};

export default ListItems;
