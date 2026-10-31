import { useState } from "react";
import UserCard from "./UserCard";
import styles from "./UserManager.module.css";

export type UserData = {
  name: string;
  job: string;
  isSelected: boolean;
};

const userData: UserData[] = [
  { name: "김철수", job: "Frontend Developer", isSelected: false },
  { name: "이영희", job: "UI Designer", isSelected: false },
  { name: "박민수", job: "backend Developer", isSelected: false },
];

export default function UserManager() {
  const [selectedUser, setSelectedUser] = useState<UserData>();

  const handleSeletedUser = (user: UserData) => {
    setSelectedUser((prev) => (prev?.name === user.name ? undefined : user));
  };

  return (
    <div>
      {userData.map((user) => (
        <UserCard
          key={user.name}
          userProfile={user}
          isSelect={selectedUser?.name === user.name}
          onSelected={() => handleSeletedUser(user)}
        />
      ))}

      <div className={styles.result}>
        <p>선택 결과</p>
        {selectedUser
          ? `${selectedUser.name}님을 선택하셨습니다.`
          : "선택된 사용자가 없습니다."}
      </div>
    </div>
  );
}
