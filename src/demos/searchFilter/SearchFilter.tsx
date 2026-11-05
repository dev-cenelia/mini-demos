import { SearchRounded } from "@mui/icons-material";
import { useState, type ChangeEvent } from "react";
import styles from "./SearchFilter.module.css";

type ProductData = {
  id: string;
  name: string;
  cate: string;
};

const productData: ProductData[] = [
  { id: crypto.randomUUID(), name: "사과", cate: "과일" },
  { id: crypto.randomUUID(), name: "바나나", cate: "과일" },
  { id: crypto.randomUUID(), name: "딸기", cate: "과일" },
  { id: crypto.randomUUID(), name: "당근", cate: "채소" },
  { id: crypto.randomUUID(), name: "오이", cate: "채소" },
  { id: crypto.randomUUID(), name: "감자", cate: "채소" },
];

export default function SearchFilter() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filteredProducts = productData.filter((item) =>
    item.name.includes(searchValue.trim()),
  );
  return (
    <div className={styles.searchFilter}>
      <div className={styles.searchBar}>
        <SearchRounded aria-hidden="true" />
        <input
          type="search"
          aria-label="상품명 검색"
          placeholder="상품명 검색 (예: 사과, 감자)"
          onChange={handleChangeValue}
          value={searchValue}
        />
      </div>
      <div>
        <div className={styles.listHeader}>
          <h3>상품 목록</h3>
          <span role="status">검색 결과 {filteredProducts.length}개</span>
        </div>
        <ul className={styles.list}>
          {filteredProducts.map((item) => (
            <li key={item.id} className={styles.item}>
              <span>{item.name}</span>
              <span className={styles.category}>{item.cate}</span>
            </li>
          ))}
        </ul>
        {filteredProducts.length === 0 && (
          <p className={styles.empty}>
            검색 결과가 없어요. 다른 상품명을 입력해 보세요.
          </p>
        )}
      </div>
    </div>
  );
}
