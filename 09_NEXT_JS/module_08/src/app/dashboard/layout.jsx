import React from "react";

export const metadata = {
  title: {
    default: "Dashboard Layout",
    template: "%s | Dashboard Layout",
  },

  description: "Dashboard Layout....",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashobaord Layout</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
