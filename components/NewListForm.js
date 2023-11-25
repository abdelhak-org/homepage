"use client";
import { useEffect, useState } from "react";
import { useDataContext } from "@/context/data/DataContext";
const NewListForm = ({ showListForm, setShowListForm }) => {
  const { dataActions } = useDataContext();
  const [newList, setNewList] = useState({
    listName: "",
    listId: Math.random(),
    top:null, 
    left :null
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dataActions.addNewList(newList);
    setShowListForm(!showListForm);
  };
  useEffect(()=>{

  }, [submitHandle])
  return (
    <form
      data-testid='formlist-testid'  
      onSubmit={submitHandle}
      className="w-80 h-60 mt-16 p-2 text-center  border border-dashed rounded "
    >
      <label role="label" htmlFor="name_input">
        Name
      </label>
      <input
        id="name_input"
        className="w-full py-2 px-2 my-4  text-sm border border-dotted rounded-sm outline-green-light "
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
