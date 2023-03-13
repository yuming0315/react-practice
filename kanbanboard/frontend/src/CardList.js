import React from "react";
import styles from "./assets/css/CardList.css";
import Card from "./Card";

export default function CardList({ title, cards, callback }) {
  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      {cards.map((card) => {
        card.key = card.no;
        return <Card {...card} callback={callback} />;
      })}
    </div>
  );
}
