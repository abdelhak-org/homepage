"use client";
import { useState } from "react";

const NewListForm = ({ addNewList, showListForm, setShowListForm }) => {
  const [newList, setNewList] = useState({
    listName: "",
    listId: Math.random(),
  });

  const submitHandle = (e) => {
    e.preventDefault();
    addNewList(newList);
    setShowListForm(!showListForm)
  };

  return (
    <form
      onSubmit={submitHandle}
      className="w-60 h-40 border border-dashed rounded "
    >
      <label>
        <span> Name:</span>
        <input
          className="w-full py-1 px-2 text-sm border border-dotted rounded-sm outline-none "
          onChange={(e) => setNewList({ ...newList, listName: e.target.value })}
          value={newList.listName}
          type="text"
          placeholder="Enter The List Name "
        />
      </label>
      <button
       
        type="submit"
        className="p-1 mx-auto block text-green font-bold tracking-wide"
      >
        Confirm
      </button>
    </form>
  );
};

export default NewListForm;
