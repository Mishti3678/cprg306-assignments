/*Add the "use client" directive to the top of the file.
  Import the useState hook from React.*/

"use client";
import { useState } from "react";
import Link from 'next/link';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  
    // Increment function (max 20)
  const increment = () => {setQuantity((prev) => (prev < 20 ? prev + 1 : prev));};
     // Decrement function (min 1)
  const decrement = () => {setQuantity((prev) => (prev > 1 ? prev - 1 : prev));};
  const [category, setCategory] = useState("produce");


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 

  
    const item = { name, quantity, category };
    console.log("New item:", item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };



  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-6 rounded-lg shadow-md w-[400px] required">
        <label className="text- mb-1 ">Item Name</label>
        <input
          type="text"
          id ="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g.,milk, 4 L 🥛"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      

        <div className="flex flex-col items-start"></div>
        <h1 className="text- text-gray-150 mb-1 mt-3">Quantity (1-20)</h1>
        <h1 className="text- text-gray-700 mb-3">
          Curent:
          <span className="text-xl text-gray-100 font-bold">{quantity}</span>
        </h1>
        <div className="flex items-left space-x-4 mb-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-gray-200 text-white-900 rounded-lg"
          >
            -
          </button>

          <button type= "button"
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            +
          </button> 
        </div>
        <p className="mt-0 mb-3 text-sm text-gray-500">Allowed range: 1-20</p>

        <label className="text- text-gray-150 mb-1 ">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Snacks"
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
          <option value="snacks">snacks</option> 
          <option value="household">Household</option> 
          <option value="other">Other</option> 

          </select>
        <button
          type="submit"
          className="bg-green-600 text-white  px-3 py-2 rounded hover:bg-green-800">
          Add Item
        </button>
      </div>  
    </form>
  );
}