"use client";

import React from "react";
import Form from "next/form";

const ContactForm = ({ action }) => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold mb-3">Contact Form</p>
      <Form action={action} className="space-y-4 flex flex-col">
        <label>Name</label>
        <input
          type="name"
          name="name"
          placeholder="Enter your name"
          className="border rounded-md p-2"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="border rounded-md p-2"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          className="border rounded-md p-2"
        />

        <button
          className="px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-800 hover:border-2 text-white font-bold bg-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ContactForm;
