"use client";

import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";

export default function Home() {
  const { uiData } = useUiContext();
  const { listsData, searchValue } = useDataContext();
  
  const filteredLists = searchValue === ""
    ? listsData
    : listsData.map((list) => {
        return {
          ...list,
          items: list.items.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          ),
        };
      }).filter((list) => list.items.length > 0);
  
  return (
    <div
      style={{
        background: uiData.bgColor,
      }}
      className="max-w-[1534px] min-h-screen px-4 flex justify-between flex-wrap  mx-auto "
    >
      {filteredLists.map((list, index) => {
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
