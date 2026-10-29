import React from "react";
import UserCard from "./UserCard";

export type UserData = {
  name: string;
  job: string;
  isActive: boolean;
};

export default function UserPofile() {
  const user: UserData = {
    name: "김샛별",
    job: "Frontend Developer",
    isActive: true,
  };

  return (
    <div>
      <UserCard profile={user} />
    </div>
  );
}
