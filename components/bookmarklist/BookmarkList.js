"use client";
import { useState , useEffect } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import  {useDataContext}  from "@/context/data/DataContext";
import OptionsMenu from "./OptionsMenu";
import ListItems from "./ListItems"
import LIstHeader from "../LIstHeader";
const style = {
  position: "absolute",
  padding: "0.5rem 1rem",
  cursor: "move",
};

const BookmarkList = ({ listCategory, listId , listIndex}) => {

  const { uiData } = useUiContext();
  const {listsData} = useDataContext()
  const [collapse, setCollapse] = useState(true);
  const items = listsData.find((list)=> list.listId === listId).items
  return (
    <div className="min-w-[260px] bookmarklist_container h-fit border m-8 border-gray  rounded-md   ">
      <div
        style={{ backgroundColor: uiData.bookmarkHeaderColor }}
        className="flex justify-between content-center px-2 py-1 relative "
        > 
        
        <LIstHeader  setCollapse={setCollapse} collapse={collapse}  listCategory ={listCategory}/>
        <OptionsMenu />
      </div>
        
      {collapse && (
          <>
          <ul className="flex flex-col gap-2 py-2 px-2  ">
          <ListItems items={items}  listId={listId}  listIndex={listIndex}/>
          </ul>
      </>
      )}
    </div>
  );
};

export default BookmarkList;
