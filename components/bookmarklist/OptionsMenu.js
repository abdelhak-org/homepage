"use client";

import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import { TbDotsVertical } from "react-icons/tb";

export default function OptionsMenu() {
  const [showOptions, setShowOptions] = useState(false);
  const { actions, uiData } = useUiContext();
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
    actions.ChangeBookmarkColor(e.target.value);
  };

  return (
    <>
      <button
        data-testid="settingIcon"
        onClick={() => setShowOptions(!showOptions)}
      >
        <TbDotsVertical className="text-xl my-2" />
      </button>

      {showOptions && (
        <div className="absolute flex flex-col gap-2 bg-gray px-3 py-2 w-32 rounded-md top-[52px] right-1 z-10">
          <div className="flex justify-between items-center gap-2 py-1 text-xs">
            <label>Color:</label>
            <input
              value={uiData.bookmarkHeaderColor}
              onChange={onColorInputChange}
              className="h-6 text-sm p-1"
              type="color"
            />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <label>Font size:</label>
            <select
              onChange={onSelectChange}
              className="w-full rounded-md px-2 py-1 text-xs cursor-pointer outline-none"
            >
              {selectElements}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
