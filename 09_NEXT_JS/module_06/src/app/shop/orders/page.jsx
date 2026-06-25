"use client";

import { useRouter } from "next/navigation";
import React from "react";

const OrdersPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4">
      <h1>OrdersPage</h1>
      <p
        className="cursor-pointer"
        onClick={() => router.push("/shop/products")}
      >
        Go to Products
      </p>
      <button onClick={() => router.refresh()}>Refresh</button>
    </div>
  );
};

export default OrdersPage;
