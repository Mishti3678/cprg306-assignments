
"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Increment function (max 20)
  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  // Decrement function (min 1)
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new item object with a random ID
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    // Instead of alert → call the onAddItem prop
    onAddItem(newItem);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-lg shadow-md w-[450px] mx-auto mb-6">
        <label className="block mb-1 font-semibold text-gray-100">Item Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., milk, 4 L 🥛"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />

        <h1 className="text-gray-100 mb-1 mt-3 font-semibold">Quantity (1–20)</h1>
        <p className="text-gray-700 mb-3">
          Current: <span className="font-bold  text-gray-100 text-lg">{quantity}</span>
        </p>

        <div className="flex items-left space-x-4 mb-4">
          <button
            type="button"
            onClick={decrement}
            className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
          >
            -
          </button>

          <button
            type="button"
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            +
          </button>
        </div>
        <label className="block mb-1 font-semibold text-gray-100">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg hover:border-gray-400 mb-4"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-800"
        >
          Add Item
        </button>
        
      </div>
    </form>
  );
}
