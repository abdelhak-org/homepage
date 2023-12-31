import { useDrag } from "react-dnd";
import { dropItemTypes } from "@/dropItemTypes";
import { useUiContext } from "@/context/ui/UiContext";
import { TbPencil } from "react-icons/tb";
import BookmarkItemModal from "@/components/Modal/BookmarkItemModal";
import { useState } from "react";

const BookmarkItem = ({ name, id, listId, url,index }) => {
  const [toggle, setToggle] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    type: dropItemTypes.BOOKMARK,
    item: {
      name,
      id,
      listId,
      url,
      index
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const { uiData, actions: uiActions } = useUiContext();

  const style = {
    fontSize: uiData.fontS,
    opacity: isDragging ? 0.5 : 1, // Uncomment if needed
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleOpenModal = () => {
    uiActions.openModal(id);
  };

  return (
    <>
      <li
        data-testid="bookmark-item-test"
        ref={drag}
        style={style}
        className="relative flex justify-between items-center p-2 text-sm rounded-md border border-solid border-gray font-roboto"
      >
        <button>
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google Logo"
            className="w-8 h-8"
          />
        </button>
        <p>{name}</p>
        <TbPencil
          onClick={toggleHandler}
          className="w-4 h-4 cursor-pointer"
          color="#333"
        />
      </li>
      {toggle && <BookmarkItemModal id={id} setToggle={setToggle} />}
    </>
  );
};

export default BookmarkItem;


