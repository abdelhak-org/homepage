"use client";

import React, {useState} from "react";
import {useDrop} from "react-dnd";
import BookmarkList from "@/components/bookmarklist/BookmarkList";
import NewListForm from "@/components/NewListForm";
import {useUiContext} from "@/context/ui/UiContext";
import {useDataContext} from "@/context/data/DataContext";
import {dropItemTypes} from "@/dropItemTypes";
import BookmarkItemModal from "@/components/Modal/BookmarkItemModal";


export default function Home() {
    const [showListForm, setShowListForm] = useState(false);
    const {uiData} = useUiContext();
    const {listsData, dataActions} = useDataContext();


    const [, drop] = useDrop(
        () => ({
            accept: dropItemTypes.LIST,
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset();
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                dataActions.moveList(item.listId, left, top);
            },
        })
    );

    return (

        <>
            {!true && <BookmarkItemModal/>}
            <div
                ref={drop}
                style={{

                    background: uiData.bgColor,
                }}
                className={`main_container w-screen  relative flex gap-5  flex-col md:max-w-[1534px] md:flex-row min-h-screen mx-auto 
           items-center justify-around flex-wrap `}
            >
                {listsData.map((box, index) => {
                    const {listName, listId, top, left} = box
                    return (
                        <BookmarkList
                            listCategory={listName}
                            listId={listId}
                            key={index}
                            index={index}
                            id={index}
                            top={top}
                            left={left}
                        />
                    );
                })}
                {showListForm && (
                    <NewListForm
                        addNewList={dataActions.addNewList}
                        setShowListForm={setShowListForm}
                        showListForm={showListForm}
                    />
                )}

                {!showListForm && (
                    <button
                        onClick={() => setShowListForm(!showListForm)}
                        className="px-4 py-2 border rounded-md border-dotted text-white absolute
            font-josefin bg-green   mb-4  right-2 top-20"
                    >
                        ADD NEW LIST
                    </button>
                )}
            </div>
        </>
    );
}

/*
  {showListForm && (
          <NewListForm
            addNewList={addNewList}
            setShowListForm={setShowListForm}
            showListForm={showListForm}
          />
        )}

        {!showListForm && (
          <button
            onClick={() => setShowListForm(!showListForm)}
            className="px-4 py-2 border rounded-md border-dotted text-white 
            font-josefin bg-green   mb-4"
          >
            ADD NEW LIST
          </button>
        )}
        */
