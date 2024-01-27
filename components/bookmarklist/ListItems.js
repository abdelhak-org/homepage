import React, { useState, useCallback, useEffect } from "react";
import update from "immutability-helper";
import { useDrop } from "react-dnd";
import BookmarkItem from "./BookmarkItem";
import { dropItemTypes } from "@/dropItemTypes";
import { useDataContext } from "@/context/data/DataContext";

const ListItems = ({items, listId  ,listIndex   }) => {
  const { dataActions, listsData } = useDataContext();
  const [isPending , setIsPending] = useState(false)
  const [cards, setCards] = useState([]);
  // HANDLE DRAG 
  /*
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      setCards((prevCards) =>  
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    },
    [cards]
  );
*/
  useEffect(()=>{
    setIsPending(true)
    const list = listsData.find((list) => list.listId === listId).items;
    setCards([...items])
    setIsPending(false)
  },[listsData])
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
