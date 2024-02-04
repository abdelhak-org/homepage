import React, { useState } from "react";

const NewBookmark = () => {
  const [newBookmark, setNewBookmark] = useState({ id: "", name: "", url: "" });

  return (
    <div className="w-full">
      <input
        type="text"
        value={newBookmark.name}
        onChange={(e) =>
          setNewBookmark({ ...newBookmark, name: e.target.value })
        }
        placeholder="New BookmarkItem"
        className="rounded-md px-2 py-1 outline-0"
      />
    </div>
  );
};

export default NewBookmark;
