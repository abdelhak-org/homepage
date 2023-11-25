"use client";

import {useDrag} from "react-dnd";
import {dropItemTypes} from "@/dropItemTypes";
import {useUiContext} from "@/context/ui/UiContext";
import {useDataContext} from "@/context/data/DataContext";
import {motion} from "framer-motion"
import {TbPencil} from "react-icons/tb";
import React, {useState} from "react";
import BookmarkItemModal from "@/components/Modal/BookmarkItemModal";

const BookmarkItem = ({name, id, listId, url, itemVariants}) => {
    const [openModal, setOpenModal] = useState(false)
    const [{isDragging}, drag] = useDrag({
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
    const {uiData, actions: uiActions} = useUiContext();
    const {dataActions} = useDataContext();
    const style = {
        fontSize: uiData.fontS,
        opacity: isDragging ? 0.5 : 1,
    }

    const handleOpenModal = () => {
        uiActions.openModal(id)
    }
    return (
        <>
            <motion.li
                data-testid="bookmark-item-test"
                ref={drag}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                style={style}
                className="relative flex justify-between items-center p-2  text-sm rounded-md border border-solid border-blue-200  "
            >
                <button>
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                         className="w-8 h-8"/>
                </button>
                <p>{name}</p>
                <TbPencil onClick={handleOpenModal} className="w-4 h-4" color="white"/>

            </motion.li>
        </>
    );
};

export default BookmarkItem;


