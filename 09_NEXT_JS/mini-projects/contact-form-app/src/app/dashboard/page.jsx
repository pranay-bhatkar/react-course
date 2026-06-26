import React from "react";
import { DBConnect } from "../../../lib/db";
import contact from "../../../lib/models/contact";
import Link from "next/link";
import StatusBtn from "../../../components/status-btn";

const DashboardPage = async () => {
  await DBConnect();

  const contacts = await contact.find();

  return (
    <div className="flex flex-col items-center p-10">
      <p className="text-4xl font-bold">DashBoard</p>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-3 mt-3">
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="border space-y-2 bg-gray-800 p-4 mb-4 rounded-md "
          >
            <h3>Name : {contact.name}</h3>
            <p>Email : {contact.email}</p>
            <p>Message : {contact.message}</p>

            {contact.status === "resolved" ? (
              <p> {contact.status}</p>
            ) : (
              <StatusBtn id={contact._id.toString()} />
            )}
          </div>
        ))}
      </div>
      <Link className="hover:text-indigo-600 " href={"/"}>
        Add contact
      </Link>
    </div>
  );
};

export default DashboardPage;
