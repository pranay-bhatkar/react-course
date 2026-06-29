"use server";

import { connectDB } from "@/lib/db";
import { todoSchema } from "../schemas/todo-schema";
import Todo from "../models/todo";

export async function addTodo(data) {
  await connectDB();
  const validateFields = todoSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: "Invalid fiedls" };
  }

  try {
    const newTodo = await Todo.create(validateFields.data);
    return JSON.parse(JSON.stringify(newTodo));
  } catch (error) {
    console.error("Failed to create todo : ", error);
    return { error: "Failed to create todo" };
  }
}

export async function getTodo() {
  await connectDB();
  try {
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(todos));
  } catch (error) {
    console.error("failed to fetch todos : ", error);
    return { error: "Failed to fetch todos" };
  }
}

export async function toggleTodo(id, completed) {
  await connectDB();

  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      id,
      { completed },
      { new: true },
    );
    return JSON.parse(JSON.stringify(updateTodo));
  } catch (error) {
    console.error("failed to toggle todos : ", error);
    return { error: "Failed to toggle todos" };
  }
}

export async function deleteTodo(id) {
  await connectDB();

  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);
    return {
      success: true,
    };
  } catch (error) {
    console.error("failed to delete todos : ", error);
    return { error: "Failed to delete todos" };
  }
}
