import Link from "next/link";
import React from "react";

const TwoPage = () => {
  return (
    <div className="flex flex-col">
      TwoPage
      <Link href={"/four"}>Go to Four </Link>
    </div>
  );
};

export default TwoPage;
