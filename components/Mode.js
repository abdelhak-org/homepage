"use client";
import {motion} from "framer-motion"
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
      className={`border-none  flex justify-around items-center`}
    >
      {colors.map((color, index) => {
        return (
          <motion.button
            initial={{
              scale:1,

            }}
           whileHover={{
            scale:[1 , 1,2 ,1]
           }}
            transition={{
              duration : 0.4
            }}
            role="button"
            key={index}
            onClick={() => actions.ChangeBgColor(color)}
            style={{ background: color }}
            className=" w-8 h-8 mx-2 border-none   flex  "
          ></motion.button>
        );
      })}
    </div>
  );
};

export default Mode;
