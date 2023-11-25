"use client";

import { useDrag } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useUiContext } from "@/context/ui/UiContext";
import { useDataContext } from "@/context/data/DataContext";
import {motion} from "framer-motion"
const BookmarkItem = ({ name, id, listId, url , itemVariants }) => {
  const [{ isDragging },drag ] = useDrag({
    type: dropItemTypes.BOOKMARK,
    item: {
      name,
      id,
      listId,
      url,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const { uiData } = useUiContext();
  const { dataActions } = useDataContext();
  const style = {
    background: uiData.bookmarkColor,
    fontSize: uiData.fontS,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <>
      <motion.li
        data-testid = "bookmark-item-test"
        ref={drag}
         variants={itemVariants}
         initial="hidden"
         animate="visible"
         whileHover={{
          scale:[1, 0.8 ,1],
           transition:{
            duration:0.2
           }
         }}
        style={style}
        className="px-4 py-2 w-fit flex items-center
        border border-dashed m-2 font-josefin   border-blue-200 relative "
      >
        
          {name}
        <span
          data-testid = "bookmark-item-span-test"
          onClick={() => dataActions.deleteBookmark(id)}
          className="absolute -top-2 right-0 p-1 text-pink"
        >
          x
        </span>
      </motion.li>
    </>
  );
};

export default BookmarkItem;


