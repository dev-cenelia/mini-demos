import {
  ArtTrack,
  People,
  Settings,
  type SvgIconComponent,
} from "@mui/icons-material";
import React, { useState } from "react";
import styles from "./TabSwitcher.module.css";

export type TabData = {
  id: string;
  title: string;
  heading: string;
  description: string;
  icon: SvgIconComponent;
};

// const tabData: TabData[] = [
//   { id: crypto.randomUUID(), title: "프로필" },
//   { id: crypto.randomUUID(), title: "활동 내역" },
//   { id: crypto.randomUUID(), title: "설정" },
// ];

const tabData: TabData[] = [
  {
    id: "profile",
    title: "프로필",
    heading: "내 프로필",
    description: "안녕하세요! 프론트엔드 개발자입니다.",
    icon: People,
  },
  {
    id: "activity",
    title: "활동 내역",
    heading: "최근 활동",
    description: "최근에 React 컴포넌트 실습을 진행했습니다.",
    icon: ArtTrack,
  },
  {
    id: "settings",
    title: "설정",
    heading: "계정 설정",
    description: "이곳에서 계정 관련 설정을 확인할 수 있습니다.",
    icon: Settings,
  },
];
export default function TabSwitcher() {
  const [selectTab, setSelectTab] = useState<string>("프로필");

  const handleTabClick = (selectTitle: string) => {
    setSelectTab(selectTitle);
  };

  return (
    <div className={styles.switcher}>
      <ul className={styles.tabs}>
        {tabData.map((item) => (
          <li
            key={item.id}
            className={selectTab === item.title ? styles.active : ""}
          >
            <button type="button" onClick={() => handleTabClick(item.title)}>
              {item.title}
            </button>
          </li>
        ))}
        {/* <li className={styles.active}>프로필</li> */}
      </ul>
      {tabData.map((panel) => (
        <div
          key={panel.id}
          className={`${styles.panel} ${selectTab === panel.title ? styles.isShow : ""}`}
        >
          <p>
            <panel.icon />
            {panel.heading}
          </p>
          <p>{panel.description}</p>
        </div>
      ))}
      <p className={styles.status}>현재 선택된 탭 : {selectTab} </p>
    </div>
  );
}
