"use client";

import React from "react";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";

export default function Home() {
  const { uiData } = useUiContext();
  const { listsData } = useDataContext();

  return (
    <div
      style={{
        background: uiData.bgColor,
      }}
      className="w-full min-h-screen px-4 flex justify-between flex-wrap "
    >
      {listsData.map((list, index) => {
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
