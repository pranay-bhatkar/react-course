import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-indigo-600">Admin Layout</h1>
      {children}
    </div>
  );
};

export default AdminLayout;
