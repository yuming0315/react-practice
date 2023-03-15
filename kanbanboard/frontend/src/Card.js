import React, { useState, useEffect } from "react";
import styles from "./assets/scss/Card.scss";
import TaskList from "./TaskList";
import update from "react-addons-update";

//렌더링과 숨기는것의 차이를 잘 알아두기

export default function Card({ no, title, description }) {
  const [showDetail, setShowDetail] = useState(false);
  const [tasks, setTasks] = useState([]);

  const changeTaskDone = async (taskNo, done) => {
    try {
      const response = await fetch(`/api/task/${taskNo}`, {
        method: "put",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `done=${done}`,
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      const newTasks = update(tasks, {
        [tasks.findIndex((task) => task.no === json.data.no)]: {
          done: {
            $set: json.data.done,
          },
        },
      });

      setTasks(newTasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  const addTask = async (taskName) => {
    const newTask = {
      no: null,
      name: taskName,
      done: "N",
      cardNo: no,
    };
    try {
      const response = await fetch("/api/task", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks([json.data, ...tasks]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch(`/api/task?cardNo=${no}`, {
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

      setTasks(json.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    showDetail && fetchTasks();
  }, [showDetail]);

  console.log(showDetail, tasks);
  return (
    <div className={styles.Card}>
      <div
        className={
          showDetail
            ? [styles.Card__Title, styles.Card__Title__open].join(" ")
            : styles.Card__Title
        }
        onClick={() => setShowDetail((prev) => !prev)}
      >
        {title}
      </div>
      {showDetail ? (
        <>
          <div className={styles.Card__Details}>{description}</div>
          <TaskList
            tasks={tasks}
            callbackAddTask={addTask}
            callbackChangeTaskDone={changeTaskDone}
          />
        </>
      ) : null}
    </div>
  );
}
