"use server";

import { redirect } from "next/navigation";
import { DBConnect } from "../lib/db";
import contact from "../lib/models/contact";
import { revalidatePath } from "next/cache";

export async function createForm(formData) {
  await DBConnect();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  await contact.create({
    name,
    email,
    message,
  });

  console.log("data saved successfully");
  redirect("/dashboard");
}

export async function updateStatus(id) {
  await DBConnect();
  await contact.findByIdAndUpdate(id, {
    status: "resolved",
  });

  revalidatePath("/");
}
