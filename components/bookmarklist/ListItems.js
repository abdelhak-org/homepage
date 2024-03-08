import React, { useState } from "react";
import BookmarkItem from "./BookmarkItem";

const ListItems = ({ items, listId }) => {

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
