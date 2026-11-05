import React, { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./FormValidation.module.css";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function FormValidation() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name !== "name" && name !== "email" && name !== "password") {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nameValid = formData.name.trim().length >= 2;
  const emailValid =
    formData.email.includes("@") && formData.email.includes(".");
  const paswwordValid = formData.password.length >= 8;

  const allValid = nameValid && emailValid && paswwordValid;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (allValid) {
      alert("가입이 완료되었습니다.");
    }
  };

  return (
    <div className={styles.formValidation}>
      <form onSubmit={handleSubmit}>
        <p>회원가입</p>
        <span>정로를 입력하고 유효성 검사를 진행하세요.</span>

        <label>
          이름
          <input
            name="name"
            type="text"
            placeholder="이름을 입력하세요"
            onChange={changeValue}
            value={formData.name}
          />
        </label>
        {isSubmitted && !nameValid && <p>이름을 2글자 이상 입력하세요.</p>}
        <label>
          이메일
          <input
            name="email"
            type="text"
            placeholder="example@email.com"
            onChange={changeValue}
            value={formData.email}
          />
        </label>
        {isSubmitted && !emailValid && <p>이메일 형식을 확인해 주세요.</p>}
        <label>
          비밀번호
          <input
            name="password"
            type="password"
            placeholder="8자 이상 입력하세요"
            onChange={changeValue}
            value={formData.password}
          />
        </label>
        {isSubmitted && !paswwordValid && (
          <p>비밀번호는 8자 이상이어야 합니다.</p>
        )}
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
