
import type { Item, ItemCreate, ItemUpdate } from "../../test/types";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchItems(): Promise<Item[]> {
  const res = await fetch(`${API_URL}/items/`);
  if (!res.ok) throw new Error("Failed to fetch items");
  return res.json();
}

export async function createItem(item: ItemCreate): Promise<Item> {
  const res = await fetch(`${API_URL}/items/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Failed to create item");
  return res.json();
}

export async function updateItem(id: number, item: ItemUpdate): Promise<Item> {
  const res = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!res.ok) throw new Error("Failed to update item");
  return res.json();
}

export async function deleteItem(id: number): Promise<{ ok: boolean }> {
  const res = await fetch(`${API_URL}/items/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete item");
  return res.json();
}