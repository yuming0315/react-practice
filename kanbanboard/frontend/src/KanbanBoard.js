import React, { useState, useEffect } from "react";
import styles from "./assets/css/KanbanBoard.css";
import CardList from "./CardList";

export default function KanbanBoard(props) {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch("/api/card", {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setCards(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

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
