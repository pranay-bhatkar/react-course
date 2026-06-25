"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";

const ShopPage = () => {
  const params = useParams();
  const pathName = usePathname();
  console.log("params: ", params);

  return <div>ShopPage</div>;
};

export default ShopPage;
