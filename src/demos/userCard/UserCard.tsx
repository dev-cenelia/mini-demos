import React from "react";
import type { UserData } from "./UserPofile";

type UserDataProps = {
  profile: UserData;
};

export default function UserCard({ profile }: UserDataProps) {
  const { name, job, isActive } = profile;
  return (
    <div>
      <p>{name}</p>
      <p>{job}</p>
      <p>{isActive ? "활동중" : "비활동"}</p>
    </div>
  );
}
