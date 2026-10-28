import React from "react";
import styles from "./DemoCard.module.css";

export default function DemoCard() {
  return (
    <div className={styles.cardWrap}>
      <h2 className={styles.title}>Count</h2>
    </div>
  );
}
