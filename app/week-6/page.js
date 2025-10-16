"use client";
import ItemList from "./item-list";

export default function Page() {
  return (
     <main className="p-6 max-w-xl mx-auto">
      <h1 className=" text-2xl font-bold w-full max-w-md mx-auto mb-1.5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
   