import Link from "next/link";
import React from "react";

const TeamDocsPage = () => {
  return (
    <div className="bg-red-500 h-full flex flex-col">
      TeamDocsPage
      <Link href={"/admin-dashboard"}>Go To default</Link>
    </div>
  );
};

export default TeamDocsPage;
