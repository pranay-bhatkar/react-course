import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `User ${id}`,
    desription: `Profile page for user ${id}`,
  };
}

const UserIdPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>User Id : {id}</h1>
    </div>
  );
};

export default UserIdPage;
