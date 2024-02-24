import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
//import { useDataContext } from "@/context/data/DataContext";
import OptionsMenu from "./OptionsMenu";
<<<<<<< HEAD
import { motion } from "framer-motion";
const container = { 
  hidden: { opacity: 0.5, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: 
      {
      duration:0.5 ,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};
=======
import ListItems from "./ListItems";
import ListHeader from "../ListHeader";
import { MdAddLink } from "react-icons/md";
import NewItemModal from "../Modal/NewItemModal";
>>>>>>> change/ui

const BookmarkList = ({ listCategory, listId, listIndex, items }) => {
  const { uiData } = useUiContext();
  //const { listsData } = useDataContext();
  const [collapse, setCollapse] = useState(true);
<<<<<<< HEAD

  const [isOver, drop] = useDrop(() => ({
    accept: dropItemTypes.BOOKMARK,
    drop: (item) => dataActions.moveBookmark(item.id, listId),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  ///

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type:"box",
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top],
  )
 
  
=======
  const [showItemModal, setShowItemModal] = useState(false);
>>>>>>> change/ui

  return (
    <div className="w-full  h-fit border m-4 border-gray-light
     rounded-md md:w-[45%] lg:w-[30%]">
      <div
        style={{ backgroundColor: uiData.bookmarkHeaderColor }}
        className="flex justify-between content-center px-2 py-1 relative"
      >
        <ListHeader
          setCollapse={setCollapse}
          collapse={collapse}
          listCategory={listCategory}
        />
        <OptionsMenu />
      </div>

      {collapse && (
        <ul className="flex flex-col gap-2 py-2 px-2">
          <ListItems items={items} listId={listId} listIndex={listIndex} />
        </ul>
      )}

      <div
      
      className="flex justify-end content-center px-2 py-1">
        <MdAddLink 
        onClick={ ()=>setShowItemModal(true) }
        className="bg-white text-gray text-lg" />
      </div>
      {
      showItemModal && 
      <NewItemModal 
      setShowItemModal = {setShowItemModal} 
      selectedListId = {listId}
      showItemModal={showItemModal} />
      }
    </div>
  );
};

export default BookmarkList;
