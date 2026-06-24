"use client";

import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        completed: false,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Todo created : " + data.todo.title);
    } else {
      setMessage("Failed to create todo");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen border-2">
      <h2>Create Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 rounded-md m-2 p-1 hover:bg-gray-800 hover:border-indigo-600"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button
          className="border-2 p-1 rounded-md px-2 bg-indigo-600 font-bold cursor-pointer hover:bg-indigo-800 hover:border-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
