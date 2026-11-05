import React, { useState } from "react";
import styles from "./CategoryFilter.module.css";

type ProductData = {
  id: string;
  name: string;
  category: string;
};

const productData: ProductData[] = [
  { id: "apple", name: "사과", category: "과일" },
  { id: "banana", name: "바나나", category: "과일" },
  { id: "strawberry", name: "딸기", category: "과일" },
  { id: "carrot", name: "당근", category: "채소" },
  { id: "cucumber", name: "오이", category: "채소" },
  { id: "potato", name: "감자", category: "채소" },
];

export default function CategoryFilter() {
  const categories: string[] = ["전체", "과일", "채소"];

  // category를 담을 것임.
  const [selectFilter, setSelectFilter] = useState<string>("전체");

  const handleSelectFilter = (cate: string) => {
    setSelectFilter(cate);
    console.log("선택 필터", selectFilter);
  };

  const filterdProducts = productData.filter(
    (item) => selectFilter === "전체" || item.category === selectFilter,
  );
  return (
    <div className={styles.categoryFilter}>
      <div>
        <ul className={styles.filters}>
          {categories.map((item) => (
            <li key={item}>
              <button
                className={selectFilter === item ? `${styles.active}` : ""}
                onClick={() => handleSelectFilter(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className={styles.listHeader}>
          <span>상품 목록</span>
          <span>총 {filterdProducts.length}개 </span>
        </div>

        <ul className={styles.products}>
          {filterdProducts.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.category}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
