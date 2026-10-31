import { useState } from "react";

export default function ToggleVisibility() {
  const [isVisibility, setIsVisibility] = useState<boolean>(true);

  const handleChangeStatus = () => {
    setIsVisibility((prev) => !prev);
  };
  //   console.log(isVisibility);

  return (
    <div>
      <button onClick={handleChangeStatus}>
        {isVisibility ? "숨기기" : "보기"}
      </button>
      {isVisibility && <p>"메세지 노출"</p>}
    </div>
  );
}
