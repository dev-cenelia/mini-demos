import styles from "./UserCard.module.css";
import type { UserData } from "./UserManager";

type UserDataProps = {
  userProfile: UserData;
  onSelect: (name: UserData) => void;
  selected: boolean;
};

export default function UserCard({
  userProfile,
  selected,
  onSelect,
}: UserDataProps) {
  const { name, job } = userProfile;
  return (
    <div className={styles.card} data-selected={selected}>
      <p>{name}</p>
      <p>{job}</p>
      <button aria-pressed={selected} onClick={() => onSelect(userProfile)}>
        {selected ? "선택" : "선택안함"}
      </button>
    </div>
  );
}
