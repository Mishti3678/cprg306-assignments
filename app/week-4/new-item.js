/*Add the "use client" directive to the top of the file.
  Import the useState hook from React.*/

"use client";
import { useState } from "react";
import Link from 'next/link';

export default function NewItem() {
  // Initialize quantity state
  const [quantity, setQuantity] = useState(1);
  // Increment function (max 20)
  const increment = () => {setQuantity((prev) => (prev < 20 ? prev + 1 : prev));};
  // Decrement function (min 1)
  const decrement = () => {setQuantity((prev) => (prev > 1 ? prev - 1 : prev));};
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[450px]">
    <div className="flex flex-col items-start"></div>
      <h1 className="text-lg text-sm text-gray-600  mb-4">Quantity:<span className="text-xl text-sm text-gray-100 font-bold">{quantity}</span></h1>
      <div className="flex items-left space-x-4 mb-4">
        <button onClick={decrement}
          className="px-4 py-2 bg-gray-200 text-white-900 rounded-lg hover:bg-gray-300"
        >-</button>

        <button onClick={increment}
      
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >+</button>
      </div>

      <p className="mt-3 text-sm text-gray-500">Allowed range: 1-20</p>
      </div>
  );
}




