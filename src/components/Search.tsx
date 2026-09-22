"use client";

import { searchItem } from "@/helper/search";
import { ISearchProps } from "@/interfaces/search.interface";
import { useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Search = ({items, onSelect}: ISearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = searchItem(items, searchTerm);

  return (
    <div className="relative mt-2 w-full">
      <label className="input bg-transparent border-gray-500 text-black">
        <IoSearch />
        <input
          type="search"
          className="grow text-gray-400"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      {searchTerm.trim() && (
        <div className="absolute left-0 right-0 top-12 z-50 max-h-80 overflow-y-auto rounded-lg border bg-white p-2 shadow-lg">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect(item);
                  setSearchTerm("");
                }}
                className="flex w-full cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-black hover:bg-gray-100"
              >
                {item.type === "folder" ? (
                  <FaFolder className="text-amber-500" />
                ) : (
                  <FaFile className="text-gray-500" />
                )}

                <span>{item.name}</span>
              </button>
            ))
          ) : (
            <p className="px-3 py-2 text-sm text-gray-500">
              No results found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
