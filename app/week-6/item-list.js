"use client";
import { useState, useEffect } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items based on sortBy value
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-4 space-x-2 flex items-center">
        <p className=" text-sm w-full max-w-md mx-auto text-gray-600">Sort by: 
          <a>  </a>
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Name
        </button>
        <a>   </a>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
           Category
        </button></p>
      </div>

       <ul className="w-full max-w-md mx-auto">
          {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}