import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import { Button } from "@/components/ui/button";
import { connectDB } from "@/lib/db";
import { CheckCircle } from "lucide-react";
import React from "react";

const HomePage = async () => {
  await connectDB();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <main className="border p-4 rounded-lg shadow-2xl space-y-4">
          <header className="flex flex-col justify-center items-center space-y-2 font-serif">
            <div className="flex flex-row gap-3 text">
              <CheckCircle 
              size={40}
              />
              <h1 className="text-2xl font-bold">Todo Application</h1>
            </div>
            <p>Orgaanize your daily task and achieve your goals.</p>
          </header>

          <section className=" border-2  p-3 rounded-md shadow-md shadow-amber-200  bg-gray-200">
            <TodoForm />
            <TodoList />
          </section>

          <footer className="text-center font-serif">
            <p>Powered by Next.js, Mongoose & Tanstack Query</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
