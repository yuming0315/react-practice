import React from "react";

export default function FoodList({ items }) {
  return (
    <ul>
      {items.map((e) => (
        <li>
          {e.name}:{e.count}
        </li>
      ))}
    </ul>
  );
}
