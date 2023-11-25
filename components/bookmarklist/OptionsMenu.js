'use client'

import React, { useState } from "react";
import { useUiContext } from "@/context/ui/UiContext";
import { FiSettings } from "react-icons/fi";

export default function OptionsMenu() {
  const [showOptions, setShowOptions] = useState(false);
  // const [isOpen, setIsOpen] = useState(true);

  const { actions } = useUiContext();
  const optionsColor = [ "#fff"  ,"#7ED7C1", "#93BFCF" ,"#E5D4FF","#87C4FF"]
  const optionsSize = ["14px" ,"18px" , "22px"]
  return (
    <div className=" absolute w-16 h-full top-0 pt-8  right-0  ">
      <button
        data-testid="settingIcon"
        onClick={() => setShowOptions(!showOptions)}
        className="absolute top-0 right-0 pr-2 text-2xl  z-50 cursor-pointer"
      >
        <FiSettings className="text-xl my-2" />
      </button>


      {showOptions && (
        <>
          <label>
            <span>Color</span>
            <select
              onChange={(e) => actions.ChangeBookmarkColor(e.target.value)}
              className="w-full cursor-pointer outline-none"
            >
             {
              optionsColor.map((option , index)=> <option style={{
                backgroundColor:option,
              }} key={index} value={option} className={` w-4 h-2 my-1 border-none cursor-pointer`}>
              </option>)
             }
            
                
              
            
          
            </select>
          </label>

          <label>
            <span>Size</span>
            <select
              onChange={(e) => actions.ChangeBookFontSize(e.target.value)}
              className="w-full cursor-pointer outline-none"
            >
              {
                 optionsSize.map((option , index)=> <option style={{
                  backgroundColor:option,
                }} key={index} value={option} className={` w-4 h-2 p-2 my-1 border-none cursor-pointer text-sm`}>
                  {option}
                </option>)
              }
            
            </select>
          </label>
        </>
      )}
    </div>
  );
}
