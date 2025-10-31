
   "use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Add new items
  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  // Handle item selection and clean the name
  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0] // remove size/quantity
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emoji/symbols
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-6 flex flex-col md:flex-row gap-6">
      {/* Left side: add + list */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-white"> Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right side: meal ideas */}
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
