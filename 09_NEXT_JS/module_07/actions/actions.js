"use server";

export async function addTodo(formaData) {
  const title = formaData.get("title");
  console.log(title);
}
