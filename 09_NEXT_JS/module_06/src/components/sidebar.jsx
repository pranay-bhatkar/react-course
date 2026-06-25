"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  const navItem = [
    { name: "Dashboard", href: "/shop/dashboard" },
    { name: "Orders", href: "/shop/orders" },
    { name: "Products", href: "/shop/products" },
    { name: "Settings", href: "/shop/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-3xl font-bold">Shop Panel</h2>
      <div>
        <nav className="bg-gray-900 flex flex-col">
          {navItem.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-md p-2 my-2 transition hover:bg-gray-700 ${isActive ? "bg-white text-black font-semibold" : "hover:bg-gra-700"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
