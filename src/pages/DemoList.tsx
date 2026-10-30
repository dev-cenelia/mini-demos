import styles from "./DemoList.module.css";
import DemoCard from "../components/DemoCard";
import Counter from "../demos/counter/Counter";
import FruitList from "../demos/fruitList/FruitList";
import LikeButton from "../demos/likeButton/LikeButton";
import LivePreview from "../demos/livePreview/LivePreview";
import UserPofile from "../demos/userCard/UserPofile";
import ToggleVisibility from "../demos/toggleVisibility/ToggleVisibility";
import ButtonDemo from "../demos/commonButton/ButtonDemo";

export default function DemoList() {
  return (
    <div className={styles.list}>
      <DemoCard title="Count">
        <Counter />
      </DemoCard>

      <DemoCard title="FruitList">
        <FruitList />
      </DemoCard>

      <DemoCard title="LikeButton">
        <LikeButton />
      </DemoCard>

      <DemoCard title="LivePreview">
        <LivePreview />
      </DemoCard>

      <DemoCard title="UserCard">
        <UserPofile />
      </DemoCard>

      <DemoCard title="ToggleVisibility">
        <ToggleVisibility />
      </DemoCard>

      <DemoCard title="CommonButton">
        <ButtonDemo />
      </DemoCard>
    </div>
  );
}
