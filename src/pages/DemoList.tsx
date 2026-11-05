import styles from "./DemoList.module.css";
import DemoCard from "../components/DemoCard";
import Counter from "../demos/counter/Counter";
import FruitList from "../demos/fruitList/FruitList";
import LikeButton from "../demos/likeButton/LikeButton";
import LivePreview from "../demos/livePreview/LivePreview";
import UserPofile from "../demos/userCard/UserPofile";
import ToggleVisibility from "../demos/toggleVisibility/ToggleVisibility";
import ButtonDemo from "../demos/commonButton/ButtonDemo";
import UserManager from "../demos/userManager/UserManager";
import TodoList from "../demos/todoList/TodoList";
import TodoCheck from "../demos/todoCheck/TodoCheck";
import QuantitySelector from "../demos/quantitySelector/QuantitySelector";
import FormValidation from "../demos/formValidation/FormValidation";
import TabSwitcherVer2 from "../demos/tabSwitcher/TabSwitcherVer2";
import Accordion from "../demos/accordion/Accordion";
import SearchFilter from "../demos/searchFilter/SearchFilter";
import CategoryFilter from "../demos/categoryFilter/CategoryFilter";

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

      <DemoCard title="UserManager">
        <UserManager />
      </DemoCard>

      <DemoCard title="TodoList">
        <TodoList />
      </DemoCard>

      <DemoCard title="TodoCheck">
        <TodoCheck />
      </DemoCard>

      <DemoCard title="QuantitySelector">
        <QuantitySelector />
      </DemoCard>

      <DemoCard title="FormValidation">
        <FormValidation />
      </DemoCard>

      {/* <DemoCard title="TabSwitcher">
        <TabSwitcher />
      </DemoCard> */}

      <DemoCard title="TabSwitcher">
        <TabSwitcherVer2 />
      </DemoCard>

      <DemoCard title="Accordion">
        <Accordion />
      </DemoCard>

      <DemoCard title="SearchFilter">
        <SearchFilter />
      </DemoCard>

      <DemoCard title="CategoryFilter">
        <CategoryFilter />
      </DemoCard>
    </div>
  );
}
