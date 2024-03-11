"use client";

import React, { useState, useEffect } from "react";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";

export default function Home() {
  const { uiData } = useUiContext();
  const { listsData, searchValue } = useDataContext();
  const [data, setData] = useState([]);
  
  useEffect(() => {
   
    setData(listsData);
  },[listsData, searchValue]);
  return (
    <div
      style={{
        background: uiData.bgColor,
      }}
      className="max-w-[1534px] min-h-screen px-4 flex justify-between flex-wrap  mx-auto "
    >
      {data.map((list, index) => {
        const { listId, listName, items } = list;
        return (
          <BookmarkList
            items={items}
            listCategory={listName}
            listId={listId}
            key={index}
            listIndex={index}
          />
        );
      })}
    </div>
  );
}
