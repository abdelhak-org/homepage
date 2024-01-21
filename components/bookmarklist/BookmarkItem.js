"use client";
import { useUiContext } from "@/context/ui/UiContext";
import { TbPencil } from "react-icons/tb";
import BookmarkItemModal from "@/components/Modal/BookmarkItemModal";
import { useEffect, useRef, useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
import { useDrag, useDrop } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";

const BookmarkItem = ({ item, index, moveCard, listId }) => {
  const { dataActions } = useDataContext();

  const [toggle, setToggle] = useState(false);

  const { uiData, actions: uiActions } = useUiContext();
  const ref = useRef(null);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleOpenModal = () => {
    uiActions.openModal(item.id);
  };

  /// handle drag drop
  const [{ isDragging }, drag] = useDrag({
    type: dropItemTypes.BOOKMARK,
    item: { item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  ///////
  const [{  isOver  }, drop] = useDrop({
    accept: dropItemTypes.BOOKMARK,
    collect(monitor) {
      return {
        isOver: monitor.isOver(),
      };
    },
    hover:(item, monitor)=> {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
   
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
   
      item.index = hoverIndex;
    },
  });

  const style = {
    cursor: "move",
    fontSize: uiData.fontS,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor:  isOver  ? "green" : "white",
  };
  drag(drop(ref));

  return (
    <>
      <li
        ref={drag(drop(ref))}
        data-testid="bookmark-item-test"
        style={style}
        className="relative flex justify-between my-1 items-center p-2 text-sm rounded-md border border-solid border-gray font-roboto"
      >
        <button>
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Logo"
            className="w-8 h-8"
          />
        </button>
        <p>{item.name}</p>
        <TbPencil
          onClick={toggleHandler}
          className="w-4 h-4 cursor-pointer"
          color="#333"
        />
      </li>
      {toggle && (
        <BookmarkItemModal id={item.id} setToggle={setToggle} listId={listId} />
      )}
    </>
  );
};

export default BookmarkItem;
