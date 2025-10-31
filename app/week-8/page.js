"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"; // ✅ Make sure this line exists and is correct


export default function Page() {
// Initialize a state variable (e.g., items) with the data from items.json.
  const [items, setItems] = useState(itemsData);

// Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  function handleAddItem(newItem) {
    setItems(prev => [...prev, newItem]); // Add new item immutably
  }

  return (
     <main className="p-6 max-w-xl mx-auto">
      <h1 className=" text-3xl font-bold w-full max-w-md mx-auto mb-">Week 7  — Shopping List</h1>
      <NewItem onAdd={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
   