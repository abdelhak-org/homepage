"use client";
import { useState } from "react";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useTheme } from "@/hooks/useTheme";
import { useData } from "@/hooks/useData";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import NewListForm from "@/components/NewListForm";

export default function Home() {
  const [showListForm, setShowListForm] = useState(false);
  const { color } = useTheme();
  const { bookmarklist, categoryList, addNewList } = useData();

  return (
    <DndProvider backend={HTML5Backend}>
      <main
        style={{
          background: color,
        }}
        className={` w-screen flex-col md:max-w-[1534px] md:flex-row min-h-screen bg-yellow-500  flex items-center justify-around flex-wrap`}
      >
        {categoryList.map((list) => {
          return (
            <BookmarkList
              data={bookmarklist}
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
