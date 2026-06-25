"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "analytics";
  return (
    <div className="flex flex-col ">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mb-6">
        <Link
          href="/shop/dashboard?tab=analytics"
          className={tab === "analytics" ? "font-bold underline " : ""}
        >
          Analytics
        </Link>
        <Link
          href="/shop/dashboard?tab=customer"
          className={tab === "customer" ? "font-bold underline " : ""}
        >
          Customer
        </Link>
        <Link
          href="/shop/dashboard?tab=sales"
          className={tab === "sales" ? "font-bold underline " : ""}
        >
          Sales
        </Link>
      </div>
      <div>{tab === "analytics" && <p>Showing analytics Data</p>}</div>
      <div>{tab === "customer" && <p>Showing customers Data</p>}</div>
      <div>{tab === "sales" && <p>Showing sales Data</p>}</div>
    </div>
  );
};

export default DashboardPage;
