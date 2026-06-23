"use client";

import React, { useState } from "react";

const ClientComp = () => {
  const [username, setUserName] = useState("Pranay");
  return (
    <div className="flex flex-col">
      {username}
      <button onClick={() => setUserName("Rahul")}>Change Name</button>
    </div>
  );
};

export default ClientComp;
