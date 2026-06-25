"use client";

import { redirect, usePathname } from "next/navigation";
import React from "react";

const Home = () => {
  const pathName = usePathname();
  console.log(pathName);

  const isLoggedIn = true;

  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div>
      <h1>current path name : {pathName}</h1>
    </div>
  );
};

export default Home;
