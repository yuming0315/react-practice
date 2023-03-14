import fs from "fs";

const state = {
  order: JSON.parse(fs.readFileSync("./json/data.json", "utf-8")),
};
let updateOrderProducts = state.order.products;
updateOrderProducts.push({
  no: "c002-003",
  name: "블루양말",
  price: 2000,
  amount: 1,
});
console.log(
  state.order.products,
  updateOrderProducts,
  state.order.products === updateOrderProducts
);
//concat 시렁
updateOrderProducts = state.order.products;
state.order.products = [
  ...state.order.products,
  { no: "c003-004", name: "빨간양말", price: 1500, amount: 2 },
];

console.log(
  state.order.products,
  updateOrderProducts,
  state.order.products === updateOrderProducts
);
