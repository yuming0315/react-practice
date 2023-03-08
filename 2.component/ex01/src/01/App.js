import React from "react";
import FoodList from "./FoodList";

export default function App() {
  const items = [
    { key: 1, name: "Bread", count: 10 },
    { key: 2, name: "egg", count: 20 },
    { key: 3, name: "Milk", count: 5 },
  ];

  return (
    <div id="App">
      <FoodList items={items} />
    </div>
  );
}
