import { notFound } from "next/navigation";
import React from "react";

const UserIdPage = async ({ params }) => {
  const { userId } = await params;

  if (userId > 10) {
    notFound();
  }

  return <div>UserId Page : {userId}</div>;
};

export default UserIdPage;
