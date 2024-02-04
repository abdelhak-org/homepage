import React, { useState } from "react";
import BookmarkItem from "./BookmarkItem";
import { useDataContext } from "@/context/data/DataContext";

const ListItems = ({ items, listId }) => {
  const { dataActions } = useDataContext();
  const [isPending, setIsPending] = useState(false);

  return (
    <div>
      {items.map((ele, index) => (
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
