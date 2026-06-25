import { connectDB } from "@/lib/db";
import { Note } from "@/lib/model/Note";

export async function POST(request) {
  await connectDB();
  const { title, content } = await request.json();
  const note = await Note.create({ title, content });

  return new Response(note, { status: 201 });

  // return new Response("Hello world");
}

export async function GET(request) {
  await connectDB();
  const notes = await Note.find().sort({ createdAt: -1 });

  return Response.json(notes, { status: 201 });
}
