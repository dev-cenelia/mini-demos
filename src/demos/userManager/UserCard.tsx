import type { UserData } from "./UserManager";
import styles from "./UserCard.module.css";

type UserDataProps = {
  userProfile: UserData;
  isSelect: boolean;
  onSelected: () => void;
};

export default function UserCard({
  userProfile,
  isSelect,
  onSelected,
}: UserDataProps) {
  const { name, job } = userProfile;
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <p>{job}</p>
      <button onClick={onSelected}>{isSelect ? "선택" : "선택안됨"}</button>
    </div>
  );
}
