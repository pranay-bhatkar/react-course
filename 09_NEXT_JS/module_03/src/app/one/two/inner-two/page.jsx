import Link from "next/link";
import React from "react";

const InnerTwoPage = () => {
  return (
    <div className="flex flex-col">
      InnerTwoPage
      <Link href={"/final"}>Go to Final-root Page</Link>
    </div>
  );
};

export default InnerTwoPage;
