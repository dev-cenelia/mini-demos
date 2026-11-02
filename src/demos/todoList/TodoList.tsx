import { useState, type ChangeEvent } from "react";
import styles from "./TodoList.module.css";
type TodoListData = {
  id: string;
  todo: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<TodoListData[]>([]);
  // 입력 중인 할 일 텍스트
  const [textUpdate, setTextUpdate] = useState<string>("");

  //   input value를 todoUpdate에 추가
  const changeText = (e: ChangeEvent<HTMLInputElement>) =>
    setTextUpdate(e.target.value);

  // 추가 함수
  const handleAddTodo = () => {
    const trimmedText = textUpdate.trim();

    if (trimmedText !== "") {
      const newTodo = { id: crypto.randomUUID(), todo: trimmedText };
      setTodos((prev) => [...prev, newTodo]);
      console.log("할일 목록", todos);

      setTextUpdate("");
    } else {
      alert("할일을 작성해주세요");
    }
  };

  const handleDeleteTodo = (selectId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== selectId));
  };

  return (
    <div className={styles.todo}>
      <h3 className={styles.title}>My Todo List</h3>
      <div className={styles.composer}>
        <input
          className={styles.input}
          type="text"
          aria-label="할 일"
          placeholder="할 일을 입력하세요"
          onChange={changeText}
          value={textUpdate}
        />
        <button className={styles.add} onClick={handleAddTodo}>
          + 추가
        </button>
      </div>

      <div>
        <ul className={styles.list}>
          {todos.length > 0 ? (
            todos.map((item) => (
              <li key={item.id} className={styles.item}>
                <span className={styles.text}>{item.todo}</span>
                <button
                  className={styles.remove}
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  삭제하기
                </button>
              </li>
            ))
          ) : (
            <li>
              <span className={styles.text}>등록된 할 일이 없습니다.</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
