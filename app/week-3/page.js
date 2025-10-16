/*create a functional component named Page that returns a main element wrapped around an h1 "Shopping List" header and the ItemList 
component. Use Tailwind classes for styling.*/
import React from 'react';
import Item from './item';
import ItemList from '../week-6/item-list';
import Link from 'next/link';
export const metadata = {
  title: 'Week 3 Assignment',
  description: 'CPRG 306 Web Development 2 - Week 3 Assignment',
}
export default function Page() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 mt-0">Shopping List</h1>
      <ItemList items={items} />
    </main>
  );
}
const items = [
  {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  },
  {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  },
  {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  },
  {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  },
  {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  },
  {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  },
  {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  },
  {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  },
  {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  },
  {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  },
  {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  },
  {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  },
];


