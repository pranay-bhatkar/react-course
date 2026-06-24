export async function PUT(request, { params }) {
  const data = await request.json();

  const updatedTodo = { id: params.id, ...data };

  return Response.json({
    todo: updatedTodo,
  });
}

export async function PATCH(request, { params }) {}

export async function DELETE(request, { params }) {}
