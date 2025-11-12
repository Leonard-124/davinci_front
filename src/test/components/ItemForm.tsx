import { useState } from "react";
import { createItem } from "../api/items";
import type { Item, ItemCreate } from "../types";

interface Props {
  onCreated: (item: Item) => void;
}

export default function ItemForm({ onCreated }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newItem = await createItem({ title, description } as ItemCreate);
    onCreated(newItem);
    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}