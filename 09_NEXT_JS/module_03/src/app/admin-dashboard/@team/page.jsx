import Link from "next/link";
import React from "react";

const TeamPage = () => {
  return (
    <div className="bg-indigo-500 h-full flex flex-col">
      TeamPage
      <Link href={"/admin-dashboard/team-docs"}>Go To Team Docs</Link>
    </div>
  );
};

export default TeamPage;
