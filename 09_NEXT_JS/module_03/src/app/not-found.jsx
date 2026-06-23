import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
      <img src={"/not-found.svg"} height={400} width={400} />
      <h1 className="text-5xl font-semibold text-indigo-300">404 not found</h1>
      <Link
        className="px-4 py-2 mt-5 border rounded-md bg-indigo-600 text-white "
        href={"/"}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
