"use client";

import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import { TbDotsVertical } from "react-icons/tb";
import { RiFontSize } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDataContext } from "@/context/data/DataContext";

export default function OptionsMenu({ listId }) {
  const [showOptions, setShowOptions] = useState(false);
  const { actions, uiData } = useUiContext();
  const { dataActions } = useDataContext();
  const optionsSize = ["14px", "18px", "22px"];

  const selectElements = optionsSize.map((option, index) => (
    <option
      style={{ backgroundColor: option }}
      key={index}
      value={option}
      className="w-4 h-2 p-2 my-1 border-none cursor-pointer text-sm"
    >
      {option}
    </option>
  ));

  const onSelectChange = (e) => actions.ChangeBookFontSize(e.target.value);

  const onColorInputChange = (e) => {
    actions.ChangeBookmarkColor(e.target.value, listId);
  };

  const handleDeleteList = () => {
    dataActions.deleteList(listId);
    setShowOptions(false);
  };

  return (
    <>
      <button data-testid="settingIcon" onClick={() => setShowOptions(!showOptions)}>
        <TbDotsVertical className="text-xl my-2" />
      </button>

      {showOptions && (
        <div className="absolute w-52 bg-white border border-neutral-300 shadow-md flex flex-col gap-2 px-3 py-2 rounded-md top-[50px] right-0 z-10">
          <div className="flex justify-between items-center overflow-hidden">
            <label className="w-[30%]">
              <IoIosColorPalette size={26} color="pink" />
            </label>
            <input
              //value={uiData.bookmarkHeaderColor}
              onChange={onColorInputChange}
              className="w-full rounded-md  cursor-pointer outline-none  shadow-md  "
              type="color"
              value={uiData.bookmarkHeaderColor}
            />
          </div>
          <div className="flex gap-1 ">
            <label className="w-[30%]">
              <RiFontSize size={22} />
            </label>
            <select
              onChange={onSelectChange}
              className="w-full  rounded-md px-2 py-1  text-lg cursor-pointer font-bold outline-none text-center bg-neutral-200"
            >
              {selectElements}
            </select>
          </div>

          <div className="flex text-lg items-center justify-between">
            <label className="w-[30%]">
              <MdDelete size={22} className="text-red-500" />
            </label>
            <button
              onClick={handleDeleteList}
              className="text-center w-full bg-red-500 text-sm  font-bold font-roboto py-1  rounded-md cursor-pointer outline-none text-red-100"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
