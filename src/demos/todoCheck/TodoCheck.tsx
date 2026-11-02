import { useState } from "react";
import styles from "./TodoCheck.module.css";

export type TodoData = {
  id: string;
  todo: string;
  isDone: boolean;
};

const todoData: TodoData[] = [
  { id: crypto.randomUUID(), todo: "붕어빵 사러가기", isDone: false },
  { id: crypto.randomUUID(), todo: "장보러 가기", isDone: false },
  { id: crypto.randomUUID(), todo: "집안일 하기", isDone: false },
];

export default function TodoCheck() {
  const [todos, setTodos] = useState<TodoData[]>(todoData);
  const handleChecked = (selectId: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === selectId ? { ...todo, isDone: !todo.isDone } : { ...todo },
      ),
    );
  };
  return (
    <div className={styles.todo}>
      <h3 className={styles.title}>오늘의 할 일</h3>

      {todos.map((item) => (
        <div key={item.id} className={styles.item}>
          <label key={item.id} className={styles.label}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={item.isDone}
              onChange={() => handleChecked(item.id)}
            />
            <p className={styles.text}>{item.todo}</p>
          </label>
        </div>
      ))}
    </div>
  );
}
