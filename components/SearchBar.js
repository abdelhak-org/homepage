"use client";

import React, { useState } from "react";
import { useDataContext } from "@/context/data/DataContext";

const SearchBar = () => {
  const { dataActions } = useDataContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dataActions.resetUi(e.target.value);
   // dataActions.resetUi(e.target.value);
  };

  return (
    <div className="flex items-center justify-center flex-col my-8">
      <div className="flex rounded-md bg-neutral-100 px-2 w-full max-w-[720px]">
        <input
          type="text"
          value={searchValue}
          className="w-full bg-slate-200 flex bg-transparent pl-2 text-gray-700 outline-0"
          placeholder="Search name Bookmark..."
          onChange={handleSearchChange}
        />
        
        <button type="submit" className="relative p-2 rounded-full">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#999"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
