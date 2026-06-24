export async function POST(request) {
  // 1. parse the json body from client
  const body = await request.json();

  const { title, completed } = body;

  // you can do db logic here .

  return Response.json({
    success: true,
    message: "Todo created successfully",
    todo: {
      title: title,
      completed,
    },
  });
}
