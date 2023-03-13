import React, { useState } from "react";
import styles from "./assets/scss/Card.scss";
import TaskList from "./TaskList";

//렌더링과 숨기는것의 차이를 잘 알아두기

export default function Card({ no, title, description, tasks, callback }) {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className={styles.Card}>
      <div
        className={
          showDetail
            ? [styles.Card__Title, styles.Card__Title__open].join(" ")
            : styles.Card__Title
        }
        onClick={(e) => setShowDetail(!showDetail)}
      >
        {title}
      </div>
      {showDetail ? (
        <>
          <div className={styles.Card__Details}>{description}</div>
          <TaskList tasks={tasks} callback={callback} />
        </>
      ) : null}
    </div>
  );
}
