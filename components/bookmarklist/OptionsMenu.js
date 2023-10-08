import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import { FiSettings } from "react-icons/fi";
export default function OptionsMenu() {
  const [showOptions, setShowOptions] = useState();
  const [isOpen, setIsOpen] = useState(true);

  const { actions } = useUiContext();
  return (
    <div className=" absolute w-16 h-full top-0 pt-8  right-0  ">
      <div
        onClick={() => setShowOptions(!showOptions)}
        className="absolute top-0 right-0 pr-2 text-2xl  z-50 cursor-pointer"
      >
        <FiSettings className="text-xl my-2" />
      </div>

      {showOptions && (
        <>
          <label>
            <select
              onChange={(e) => actions.ChangeBookmarkColor(e.target.value)}
              className="w-full cursor-pointer outline-none"
            >
              <option value="">Color</option>

              <option value={"#333"} className="bg-[#333] my-1"></option>
              <option value={"#fff"} className="bg-white my-1"></option>
              <option value={"#071952"} className="bg-[#071952] my-1"></option>
              <option value={"#004225"} className=" bg-[#004225] my-1">
                {" "}
              </option>
            </select> 
          </label>

          <label>
            <select
              onChange={(e) => actions.ChangeBookFontSize(e.target.value)}
              className="w-full cursor-pointer outline-none"
            >
              <option value="">Size</option>
              <option value={"8px"}>sm</option>
              <option value={"14px"}>lg</option>
              <option value={"18px"}>xl</option>
            </select>
          </label>
        </>
      )}
    </div>
  );
}
