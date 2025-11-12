
import { useEffect, useState } from "react";
import { fetchItems, deleteItem, updateItem } from "../api/items";
import type { Item } from "../types";

export default function ItemList() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    const data = await fetchItems();
    setItems(data);
  }

  async function handleDelete(id: number) {
    await deleteItem(id);
    setItems(items.filter((i) => i.id !== id));
  }

  async function handleUpdate(id: number) {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      const updated = await updateItem(id, { title: newTitle });
      setItems(items.map((i) => (i.id === id ? updated : i)));
    }
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.title}</strong> - {item.description}
          <button onClick={() => handleUpdate(item.id)}>Edit</button>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}