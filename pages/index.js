"use client";

import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";

export default function Home() {
  const { uiData } = useUiContext();
  const { listsData, dataActions } = useDataContext();
  
  return (
    <>
      <div
        style={{
          background: uiData.bgColor,
        }}
        className={`main_container w-screen  grid grid-cols-4 relative gap-5   md:max-w-[1534px]  min-h-screen mx-auto 
           `}
      >
        {
        listsData?.map((box, index) => {
          const { listName, listId, items } = box;
          return (
            <BookmarkList
              listItems={items}
              listCategory={listName}
              listId={listId}
              key={index}
              listIndex={index}
            />
          );
        })
        }
      </div>
    </>
  );
}

//        {//{!true && <BookmarkItemModal />}}
