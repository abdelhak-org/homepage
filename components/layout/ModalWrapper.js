"use client";
import React, { useState, useRef, useEffect } from "react";
import useOnClickOutside from "@/hooks/useClickOutside";
import { createPortal } from "react-dom";
const ModalWrapper = ({ children, isOpen, closeHandler , saveHandler }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => isOpen(false));
  
  const  handleEnter = (e) => {
    if (e.key === "Enter") {
      saveHandler();
    }
  }  


  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    }
    window.addEventListener("keydown", handleEscape);
  }, [closeHandler]);
   
  return createPortal(
    <div
    onKeyDown={handleEnter}
      className="w-screen h-screen fixed top-0 right-0 flex justify-center items-center 
    bg-[#070606bf]  z-50"
    >
      <div
        ref={ref}
        className="w-[660px]  bg-white  rounded-md flex flex-col justify-between p-4 "
      >
        {children}
      </div>
    </div>
  , document.getElementById("modal-root"));
};

export default ModalWrapper;
