import React from "react";
import styles from "./DemoCard.module.css";
import Counter from "../demos/counter/Counter";

export default function DemoCard() {
  return (
    <div className={styles.cardWrap}>
      <h2 className={styles.title}>Count</h2>
      <Counter />
    </div>
  );
}
