import type { ReactNode } from "react";
import styles from "./DemoCard.module.css";

type DemoCardProps = {
  title: string;
  children: ReactNode;
};

export default function DemoCard({ title, children }: DemoCardProps) {
  return (
    <div className={styles.cardWrap}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
