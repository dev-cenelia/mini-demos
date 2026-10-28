import React, { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // 증가
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  // 감소
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  // 리셋
  const handleReset = () => {
    setCount(0);
  };
  //   메세지 분기 처리
  let msg: string = "0입니다";

  if (count > 0) {
    msg = "양수입니다.";
  } else if (count < 0) {
    msg = "음수입니다.";
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>
        {count}는은 {msg}
      </p>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.button}
          aria-label="카운트 감소"
          onClick={handleDecrease}
        >
          −
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleIncrease}
          aria-label="카운트 증가"
        >
          +
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.reset}`}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
