"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const ShopSlugPage = () => {
  const slug = useParams();
  const pathName = usePathname();

  console.log("slug :", slug);
  console.log("pathName :", pathName);

  return <div>shopSlugPage</div>;
};

export default ShopSlugPage;
