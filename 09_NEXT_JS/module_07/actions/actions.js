"use server";

export async function addTodo(formaData) {
  const title = formaData.get("title");
  console.log(title);
}

export async function submitUser(formaData) {
  const name = formaData.get("name");
  const email = formaData.get("email");

  console.log("Submitting user data :", name, email);
}
