"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ShoppingList from "../../components/ShoppingList"; // adjust if your file name/path differs

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect to login page if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // landing page path
    }
  }, [user, router]);

  // If user not loaded yet or redirecting
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Redirecting to login...
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Shopping List</h1>
      <ShoppingList />
    </main>
  );
}
