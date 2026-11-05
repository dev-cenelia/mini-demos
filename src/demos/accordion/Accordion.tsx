import { ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import styles from "./Accordion.module.css";

type QnaData = {
  id: string;
  question: string;
  answer: string;
};
const qnaData: QnaData[] = [
  {
    id: crypto.randomUUID(),
    question: "React란 무엇인가요?",
    answer:
      "React는 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리입니다.",
  },
  {
    id: crypto.randomUUID(),
    question: "useState는 어떤 역할인가요?",
    answer: "컴포넌트의 상태를 저장하고 변경할 때 사용하는 React Hook입니다.",
  },
  {
    id: crypto.randomUUID(),
    question: "Props는 무엇인가요?",
    answer:
      "부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용하는 값입니다.",
  },
  {
    id: crypto.randomUUID(),
    question: "컴포넌트는 왜 분리하나요?",
    answer:
      "UI를 재사용하기 쉽고 유지보수하기 편하도록 기능과 역할에 따라 분리합니다.",
  },
];
export default function Accordion() {
  // 현재 클릭한 탭의 id값을 담을거임
  const [currentClick, setCurrentClick] = useState<string>("");

  const handleQuestionToggle = (selectId: string) => {
    setCurrentClick((prev) => (prev === selectId ? "" : selectId));
    console.log("지금 선택된", currentClick);
  };
  return (
    <div className={styles.accordion}>
      <ul className={styles.list}>
        {qnaData.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              onClick={() => handleQuestionToggle(item.id)}
            >
              <span>{item.question}</span>{" "}
              <ExpandMore
                className={currentClick === item.id ? styles.rotate : ""}
              />
            </button>
            {currentClick === item.id && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
