"use client";

import React, { useState } from "react";
import NewListForm from "./NewListForm";
import { useDataContext } from "@/context/data/DataContext";
const NewListHandle = () => {
  const { dataActions } = useDataContext();
  const [showListForm, setShowListForm] = useState(true);

  return (
    <div className="w-fit px-4 py-2 rounded-md shadow-md">
      {showListForm ? (
        <NewListForm
          addNewList={dataActions.addNewList}
          setShowListForm={setShowListForm}
          showListForm={showListForm}
        />
      ) : (
        <button
          onClick={() => setShowListForm(!showListForm)}
          className="px-4 py-2 border rounded-md border-dotted text-white bg-blue font-bold 
             font-roboto"
        >
          ADD NEW LIST
        </button>
      )}
    </div>
  );
};

export default NewListHandle;
