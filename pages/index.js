"use client";

import BookmarkList from "@/components/bookmarklist/BookmarkList";
import { useTheme } from "@/hooks/useTheme";
import { useData } from "@/hooks/useData";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";


export default function Home() {
  const { color } = useTheme();
  const { bookmarklist } = useData();

  return (
    <DndProvider backend={HTML5Backend}>


    <main
      style={{
        background: color,
        
      }}
      className={` min-h-screen bg-yellow-500  flex items-center justify-center `}
      >
      <BookmarkList data={bookmarklist} listCategory="social media" id="122" />
      <BookmarkList data={bookmarklist} listCategory="browsers" id="123"/>
      <BookmarkList data={bookmarklist} listCategory="contact"id="124" />
    </main>
    </DndProvider>
  );
}
