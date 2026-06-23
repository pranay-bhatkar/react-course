import React from "react";

const Doc_Page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return <div>Doc Page - optional catch-all segment: {slug}</div>;
};

export default Doc_Page;
