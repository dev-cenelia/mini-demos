import React, { useState } from "react";
import CommonButton from "./CommonButton";

export type ButtonData = {
  label: string;
  message: string;
};

const button: ButtonData[] = [
  { label: "저장", message: "저장되었습니다." },
  { label: "취소", message: "취소되었습니다." },
  { label: "삭제", message: "삭제되었습니다." },
];

export default function ButtonDemo() {
  const [message, setMessage] = useState("버튼을 눌러보세요");

  const handleMsgUpdate = (msg: string) => {
    setMessage(msg);
  };
  return (
    <div>
      {button.map((item) => (
        <CommonButton
          key={item.label}
          label={item.label}
          message={item.message}
          onMsgUpdate={() => handleMsgUpdate(item.message)}
        />
      ))}
      <p>{message}</p>
    </div>
  );
}
