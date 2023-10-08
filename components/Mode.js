"use client";
import React from "react";
import { useUiContext } from "@/context/ui/UiContext";
const Mode = () => {
  const colors = ["#F11A7B", "#0D1282", "#17594A", "#FFB000"];
  const { uiData, actions } = useUiContext();

  return (
    <div
      role="mode"
      style={{
        background: uiData.bgColor,
      }}
      className="w-screen md:max-w-[1534px]   h-16 flex justify-end items-center mx-auto pr-8 px-4 cursor-pointer "
    >
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            onClick={() => actions.ChangeBgColor(color)}
            style={{ background: color }}
            className=" w-8 h-8 rounded-full mx-2 border shadow-md"
          ></div>
        );
      })}
    </div>
  );
};

export default Mode;
