import { useState } from "react";
import UserCard from "./UserCard";
import styles from "./UserManager.module.css";

export type UserData = {
  name: string;
  job: string;
};

const userData: UserData[] = [
  { name: "김철수", job: "Frontend Developer" },
  { name: "이영희", job: "UI Designer" },
  { name: "박민수", job: "Backend Developer" },
];
export default function UserManager() {
  // 선택(버튼) 상태관리
  const [isSelect, setIsSelect] = useState<UserData | undefined>();
  // 버튼 선택시 isSelect 업데이트
  const handleUpdateSelect = (user: UserData) => {
    setIsSelect((prev) => (prev?.name === user.name ? undefined : user));
    console.log(isSelect);
  };

  return (
    <div>
      {userData.map((user) => (
        <UserCard
          key={user.name}
          userProfile={user}
          selected={isSelect?.name === user.name}
          onSelect={handleUpdateSelect}
        />
      ))}

      <div className={styles.result} aria-live="polite">
        <p>선택 결과</p>
        <p>
          {isSelect
            ? `${isSelect.name}님이 선택 되었습니다.`
            : "아무도 선택하지 않았습니다."}
        </p>
      </div>
    </div>
  );
}
