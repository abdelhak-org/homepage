"use client";
import { useState } from "react";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import NewListForm from "@/components/NewListForm";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";
export default function Home() {

  const [showListForm, setShowListForm] = useState(false);

  const { uiData } =useUiContext();
  const { bookmarksData,listsData,  addNewList } = useDataContext();


  return (
    <DndProvider backend={HTML5Backend}>
      <main
        style={{
          background: uiData.bgColor,
        }}
        className={` w-screen border  border-dashed flex-col md:max-w-[1534px] md:flex-row min-h-screen mx-auto  flex items-center justify-around flex-wrap`}
      >

        {listsData.map((list) => {
          return (
            <BookmarkList
              data={bookmarksData}
              listCategory={list.listName}
              listId={list.listId}
              key={list.listId}
            />
          );





          
        })}
        {showListForm && (
          <NewListForm
            addNewList={addNewList}
            setShowListForm={setShowListForm}
            showListForm={showListForm}
          />
        )}

        {!showListForm && (
          <button
            onClick={() => setShowListForm(!showListForm)}
            className="px-4 py-2 border rounded-md border-dotted text-white font-josefin bg-green   mb-4"
          >
            ADD NEW LIST
          </button>
        )}
      </main>
    </DndProvider>
  );
}

/*
<BookmarkList data={bookmarklist} listCategory="browsers" id="123"/>
<BookmarkList data={bookmarklist} listCategory="contact"id="124" />*/
