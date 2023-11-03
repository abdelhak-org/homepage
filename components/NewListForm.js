"use client";
import { useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
const NewListForm = ({ showListForm, setShowListForm }) => {
  const { dataActions } = useDataContext();
  const [newList, setNewList] = useState({
    listName: "",
    listId: Math.random(),
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dataActions.addNewList(newList);
    setShowListForm(!showListForm);
  };

  return (
    <form
      data-testid='formlist-testid'  
      onSubmit={submitHandle}
      className="w-60 h-40 border border-dashed rounded "
    >
      <label role="label" htmlFor="name_input">
        Name
      </label>
      <input
        id="name_input"
        className="w-full py-1 px-2 text-sm border border-dotted rounded-sm outline-none "
        onChange={(e) => setNewList({ ...newList, listName: e.target.value })}
        value={newList.listName}
        type="text"
        placeholder="Enter The List Name"
      />

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
