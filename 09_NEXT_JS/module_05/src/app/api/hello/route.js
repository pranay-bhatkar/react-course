export async function GET(request) {
  const url = new URL(request.url);
  const { searchParams } = url;

  console.log(searchParams);

  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const data = await res.json();

  //   return Response.json({
  //     data: data,
  //   });

  
  const apiUrl = new URL("https://jsonplaceholder.typicode.com/todos");
  searchParams.forEach((key, value) => {
    apiUrl.searchParams.append(value, key);
  });

  const res = await fetch(apiUrl);
  const data = await res.json();

  return Response.json({
    data: data,
  });
}
