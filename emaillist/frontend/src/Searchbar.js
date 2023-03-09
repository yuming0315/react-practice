import React from "react";
import styles from "./assets/css/Searchbar.css";

export default function Searchbar() {
  return (
    <div className={styles.Searchbar}>
      <input type="text" placeholder="찾기" />
    </div>
  );
}
