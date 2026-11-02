import { ShoppingBag } from "@mui/icons-material";
import React, { useState } from "react";
import styles from "./QuantitySelector.module.css";

export type ProductData = {
  name: string;
  price: number;
  quantity: number;
};

const productData: ProductData = {
  name: "무지 코든 티셔츠",
  price: 15000,
  quantity: 1,
};

export default function QuantitySelector() {
  const [currentQuantity, setCurrentQuantity] = useState<number>(
    productData.quantity,
  );
  const totalPrice: number = currentQuantity * productData.price;
  const handleIncrease = () => {
    setCurrentQuantity((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const handleDecrease = () => {
    setCurrentQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className={styles.selector}>
      <div className={styles.product}>
        <ShoppingBag />
        <p>{productData.name}</p>
        <p>기본가격 : {productData.price.toLocaleString("ko-KR")}원</p>
      </div>

      <div className={styles.details}>
        <div className={styles.quantityRow}>
          <p>수량선택</p>
          <div className={styles.controls}>
            <button onClick={handleDecrease} disabled={currentQuantity <= 1}>
              -
            </button>
            <p>{currentQuantity}</p>
            <button onClick={handleIncrease} disabled={currentQuantity >= 10}>
              +
            </button>
          </div>
        </div>

        <div className={styles.summaryRow}>
          <span>상품 금액</span>{" "}
          <span>{productData.price.toLocaleString("ko-KR")}원</span>
        </div>
        <div className={styles.summaryRow}>
          <span>상품 수량</span> <span>{currentQuantity}</span>
        </div>
      </div>

      <div className={styles.total}>
        <span>총 결제 금액</span>{" "}
        <span>{totalPrice.toLocaleString("ko-KR")}원</span>
      </div>
    </div>
  );
}
