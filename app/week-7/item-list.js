"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
  });

  return (
    <div>
      <div className="mb-4 space-x-2 flex items-center ml-10">
        <p className="text-sm text-gray-600">Sort by:</p>
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Category
        </button>
      </div>

      <ul className="w-full max-w-md mx-auto">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)} // ✅ Make clickable
          />
        ))}
      </ul>
    </div>
  );
}
