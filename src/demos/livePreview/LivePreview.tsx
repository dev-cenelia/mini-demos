import { useState, type ChangeEvent } from "react";
import styles from "./LivePreview.module.css";

export default function LivePreview() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="userName">
          이름
        </label>
        <input
          id="userName"
          className={styles.input}
          placeholder="이름을 입력하세요"
          onChange={handleChangeText}
          value={inputValue}
        />
      </div>
      <div className={styles.preview}>
        <p className={styles.previewTitle}>실시간 미리보기</p>
        <p className={styles.previewText}>
          {inputValue ? inputValue : "아직 입력한 내용이 없습니다."}
        </p>
      </div>
      <div className={styles.footer}>
        <span>입력 글자 수</span>
        <span className={styles.count}>
          {inputValue.length}
          <span className={styles.unit}>자</span>
        </span>
      </div>
    </div>
  );
}
