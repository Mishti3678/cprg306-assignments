"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border p-2 rounded-lg mb-2 shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="font-semibold text-l">{name}</div>
      <div className="text-gray-200 text-l">Quantity: {quantity}</div>
      <div className="text-gray-200 text-l capitalize">Category: {category}</div>
    </li>
  );
}
