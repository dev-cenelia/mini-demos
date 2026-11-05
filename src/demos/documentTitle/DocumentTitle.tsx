import React, { useEffect, useState, type ChangeEvent } from "react";

export default function DocumentTitle() {
  const [changeTitle, setChangeTitle] = useState<string>("");
  const updateTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setChangeTitle(e.target.value);
  };

  useEffect(() => {
    document.title = changeTitle;
  }, [changeTitle]);

  return (
    <div>
      <div>
        <label>
          문서 제목 입력
          <input
            type="text"
            placeholder="제목을 입력하세요."
            onChange={updateTitle}
            value={changeTitle}
          />
        </label>
      </div>
    </div>
  );
}
