import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import OptionsMenu from "./OptionsMenu";
import ListItems from "./ListItems";
import ListHeader from "../ListHeader";
import { MdAddLink } from "react-icons/md";
import NewItemModal from "../Modal/NewItemModal";

const BookmarkList = ({ listCategory, listId, listIndex, items }) => {
  const { uiData } = useUiContext();
  const [collapse, setCollapse] = useState(true);
  

  return (
    <div className="w-full h-fit border m-4 border-gray-light rounded-md md:w-[45%] lg:w-[30%]">
      <div
        style={{ backgroundColor: uiData.bookmarkHeaderColor }}
        className="flex justify-between content-center px-2 py-1 relative"
      >
        <ListHeader
          setCollapse={setCollapse}
          collapse={collapse}
          listCategory={listCategory}
        />
        <OptionsMenu listId={listId}/>
      </div>
      
      {collapse && (
        <ul className="flex flex-col gap-2 py-2 px-2">
          <ListItems items={items} listId={listId} listIndex={listIndex} />
        </ul>
      )}
      
     
      
        <NewItemModal
          selectedListId={listId}
        />
      
    </div>
  );
};

export default BookmarkList;
