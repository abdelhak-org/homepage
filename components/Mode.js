"use client";
import React from "react";
import { useUiContext } from "@/context/ui/UiContext";
import classes from "@/styles/mode.module.css";
const Mode = () => {
  const colors = ["#FFC436", "#0C356A", "#071952", "#6E3CBC", "#9A0680"];
  const { uiData, actions } = useUiContext();

  return (
    <div
      data-testid="mode_container"
      style={{
        background: uiData.bgColor,
      }}
      className={` w-48 h-48 border my-auto flex-col p-4  flex  justify-around items-center absolute ${classes.mode_container}`}
    >
      {colors.map((color, index) => {
        return (
          <div
            role="button"
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
