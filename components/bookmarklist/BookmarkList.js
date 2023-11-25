"use client";
import {useState} from "react";
import BookmarkItem from "./BookmarkItem";
import BookmarkForm from "../BookmarkForm";
import {useDrop, useDrag} from "react-dnd";
import {dropItemTypes} from "@/dropItemTypes";
import {useDataContext} from "@/context/data/DataContext";
import OptionsMenu from "./OptionsMenu";
import {motion} from "framer-motion";
import {useUiContext} from "@/context/ui/UiContext";

const container = {
    hidden: {opacity: 0.5, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
        },
    },
};

const item = {
    hidden: {y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
    },
};

const style = {
    position: 'absolute',

    padding: '0.5rem 1rem',
    cursor: 'move',
}


const BookmarkList = ({listCategory, listId, id, top, left}) => {
    const {dataActions, bookmarksData} = useDataContext();
    const {uiData} = useUiContext();

    const [showForm, setShowForm] = useState(false);
    const [collapse, setCollapse] = useState(true);

    const [isOver, drop] = useDrop(() => ({
        accept: dropItemTypes.BOOKMARK,
        drop: (item) => dataActions.moveBookmark(item.id, listId),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const [{isDragging}, drag] = useDrag(
        () => ({
            type: dropItemTypes.LIST,
            item: {listId, left, top},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )

    return (
        <div
            //ref={drag}
            ref={(node) => drag(drop(node))}
            className="min-w-[260px] bookmarklist_container  h-fit border m-8 border-blue-200 bg-slate-50 rounded-md absolute  "
            style={{
                top, left,
            }}
        >
            <div
                style={{backgroundColor: uiData.bookmarkHeaderColor}}
                className="flex justify-between content-center px-2 py-1 relative border border-b-1">
                <h6
                    data-testid="header_6"
                    onClick={() => setCollapse(!collapse)}
                    className="w-full my-2 text-center  font-bold text-md cursor-pointer "
                >
                    {listCategory}
                </h6>
                <OptionsMenu/>
            </div>

            {collapse && (
                <>
                    <motion.ul className="flex flex-col gap-2 py-2 px-2  " variants={container} initial="hidden"
                               animate="visible">
                        {bookmarksData
                            .filter((item) => item.listId === listId)
                            .map((item) => {
                                return (
                                    <BookmarkItem
                                        id={item.id}
                                        key={item.id}
                                        name={item.name}
                                        listId={item.listId}
                                        url={item.url}
                                        itemsVariants={item}
                                    />
                                );
                            })}
                    </motion.ul>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-4 py-2 border block mx-auto border-dashed "
                    >
                        add
                    </button>
                    {showForm ? (
                        <BookmarkForm setShowForm={setShowForm} listId={listId}/>
                    ) : (
                        ""
                    )}

                </>
            )}
        </div>
    );
};

export default BookmarkList;
