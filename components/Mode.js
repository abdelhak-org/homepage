"use client";
import React from "react";
//import { useTheme } from "@/hooks/useTheme";
import { useUiContext } from "@/context/ui/UiContext";
const Mode = () => {
   const colors = ["#F11A7B", "#0D1282", "#17594A","#FFB000"];
  //const {color ,ChangeBgColor } = useTheme();
  const {uiData ,actions} = useUiContext();
  
   console.log(" from mode component",uiData.bgColor)
  return (
    <div 
    style={{
      background:uiData.bgColor,
    }}
    className="w-screen h-16 flex justify-end items-center pr-8 px-4 cursor-pointer bg-yellow-500  ">
      {colors.map((color ,index) => {
        return (
          <div
          key={index}
            onClick={() => actions.ChangeBgColor(color)}
            style={{ background:color }}
            className=" w-8 h-8 rounded-full mx-2 border shadow-md"
          >
            {" "}
          </div>
        );
      })}
    </div>
  );
};

export default Mode;
