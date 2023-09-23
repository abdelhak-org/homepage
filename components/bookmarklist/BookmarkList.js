"use client";
import { useEffect, useRef, useState } from "react";
import BookmarkItem from "./BookmarkItem";
import { FiSettings } from "react-icons/fi";
import { BsDoorClosed } from "react-icons/bs";
import { useTheme } from "@/hooks/useTheme";
import BookmarkForm from "../BookmarkForm";
import { useDrop, useDrag } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useData } from "@/hooks/useData";

/// create bookmarklist
const BookmarkList = ({ data, listCategory, id }) => {
  const {moveBookmark} = useData()
  // import required states 
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isCLose, setIsClose] = useState(true);
  const { ChangeBookmarkColor, ChangeBookFontSize } = useTheme();
  // use the main container as draged element

  //create drop hook
  const [isOver, drop] = useDrop(() => ({
    accept: dropItemTypes.BOOKMARK,
    drop: (item) =>  moveBookmark(item.id , listCategory),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
  
  return (
    <div
      ref={drop}
      className="w-60 h-fit border m-8 border-blue-200 bg-slate-50 rounded-md relative "
    >
      <h6
        onClick={() => setIsClose(!isCLose)}
        className="w-full my-2 text-center shadow-md capitalize font-script font-bold text-xl cursor-pointer"
      >
        {listCategory}
      </h6>
      {isCLose && (
        <>
          <ul>
            {data
              .filter(
                (item) =>
                  item.category.toLowerCase().trim()=== listCategory.toLowerCase().trim()
              )
              .map((item) => {
                return (
                  <BookmarkItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    category={item.category}
                    url={item.url}
                    icon={item.icon}
                  />
                );
              })}
          </ul>
          {!isAdded ? (
            <button
              onClick={() => setIsAdded(!isAdded)}
              className="px-4 py-2 border block mx-auto border-dashed "
            >
              add
            </button>
          ) : (
            <BookmarkForm
              isAdded={isAdded}
              setIsAdded={setIsAdded}
              category={listCategory}
            />
          )}

          <p
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-0 right-0 pr-2 text-2xl  z-50 cursor-pointer"
          >
            {!isOpen ? (
              <FiSettings className="text-xl my-2" />
            ) : (
              <BsDoorClosed className="text-xl my-2" />
            )}
          </p>

          {isOpen && (
            <div className=" absolute w-16 h-full top-0 pt-8  right-0 bg-yellow-200">
              <label>
                <select
                  onChange={(e) => ChangeBookmarkColor(e.target.value)}
                  className="w-full cursor-pointer outline-none"
                >
                  <option value="">Color</option>
                  <option value={"#333"} className="bg-[#333]"></option>
                  <option value={"#fff"} className="bg-white">
                  </option>
                  <option value={"#071952"} className="bg-[#071952]"></option>
                  <option value={"#004225"} className=" bg-[#004225]"> </option>
                </select>
              </label>

              <label>
                <select
                  onChange={(e) => ChangeBookFontSize(e.target.value)}
                  className="w-full cursor-pointer outline-none"
                >
                  <option value="">Size</option>
                  <option value={"8px"}>sm</option>
                  <option value={"14px"}>lg</option>
                  <option value={"18px"}>xl</option>
                </select>
              </label>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookmarkList;
