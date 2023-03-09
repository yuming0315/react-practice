import React from "react";
import styles from "./assets/css/KanbanBoard.css";
import cards from "./assets/json/data.json";
import CardList from "./CardList";

export default function KanbanBoard(props) {
  const table = ["ToDo", "Doing", "Done"];
  return (
    <div className={styles.KanbanBoard}>
      {table.map((e) => (
        <CardList
          key={e}
          title={e}
          cards={cards.filter((card) => card.status === e)}
        />
      ))}
    </div>
  );
}
