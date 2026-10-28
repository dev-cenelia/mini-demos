import { useState, type ReactNode } from "react";
import styles from "./DemoCard.module.css";

const backgrounds = [
  "linear-gradient(135deg, #6558f5, #4438e8)",
  "linear-gradient(135deg, #2563eb, #1e40af)",
  "linear-gradient(135deg, #0f766e, #115e59)",
  "linear-gradient(135deg, #be185d, #9d174d)",
  "linear-gradient(135deg, #c2410c, #9a3412)",
];

type DemoCardProps = {
  title: string;
  children: ReactNode;
};

export default function DemoCard({ title, children }: DemoCardProps) {
  const [background] = useState(
    () => backgrounds[Math.floor(Math.random() * backgrounds.length)],
  );

  return (
    <div className={styles.cardWrap} style={{ background }}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
