"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext"; 
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useAuthContext();

  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) return;
    const list = await getItems(user.uid);
    setItems(list);
  };

  // Run loadItems when user logs in
  useEffect(() => {
    loadItems();
  }, [user]); // do NOT put items here — infinite loop

  // Add item to Firestore
  const handleAddItem = async (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity: Number(quantity),
      category: "other",
    };

    // Add to Firestore
    const id = await addItem(user.uid, newItem);

    // Add to local state
    setItems([...items, { id, ...newItem }]);

    // Reset form
    setName("");
    setQuantity(1);
  };

  if (!user) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Shopping List</h1>
        <p>You must be logged in to view your shopping list.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Shopping List</h1>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={name}
          placeholder="Item name"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <button type="submit">Add Item</button>
      </form>

      {/* Items List */}
      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} — {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
