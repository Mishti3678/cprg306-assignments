/*create a functional component named Item. This component should accept name, quantity, and category as props and display 
them in a list item element. Use Tailwind classes for styling.*/
import React from 'react';
export default function Item({ name, quantity, category })
{
  return (
    <li className="border border-gray-100 rounded-lg p-3 mb-2 mt-0  shadow-sm hover:shadow-md transition-shadow duration-200   flex flex-col  ">
      <div className="md:7">{name}</div>
      <div className="">Quantity: {quantity}</div>
      <div className="">Category: {category}</div>
    </li>
  );
}