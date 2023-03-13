import React, { useState } from "react";
import styles from "./assets/css/KanbanBoard.css";
import data from "./assets/json/data.json";
import CardList from "./CardList";

export default function KanbanBoard(props) {
  const [cards, setCards] = useState(data);
  console.log(data);

  const changeTaskDone = (no, done) => {
    const cardIndex = cards.findIndex((card) =>
      card.tasks.findIndex((task) => task.no === no)
    );
    console.log(cards[cardIndex]);
    const taskIndex = cards[cardIndex].tasks.findIndex(
      (task) => task.no === no
    );
    cards[cardIndex].tasks[taskIndex].done = done;

    console.log(cards[cardIndex].tasks[taskIndex]);

    //setTasks(cards);
  };

  const table = ["ToDo", "Doing", "Done"];
  return (
    <div className={styles.KanbanBoard}>
      {table.map((e) => (
        <CardList
          key={e}
          title={e}
          cards={cards.filter((card) => card.status === e)}
          callback={changeTaskDone}
        />
      ))}
    </div>
  );
}
