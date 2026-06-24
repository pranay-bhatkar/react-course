import { cookies, headers } from "next/headers";

export async function GET(request) {
  // getting the headers data

  //   //   const reqHeaders = new Headers(request.headers);
  //   //   console.log(reqHeaders.get("Authorization"));
  //   //   return new Response("Hello world");

  const reqHeader = await headers();

  // read cookies
  const cookiStore = await cookies();

  cookiStore.set("theme", "dark");

  const username = cookiStore.get("username");
  console.log("cookie : ", username);

  const theme = cookiStore.get("theme");

  console.log(theme);

  console.log(reqHeader.get("user-agent"));
  return new Response("<h1>Hello World</h1>", {
    headers: {
      "content-Type": "text/html",
      "set-cookie": "username=suraj",
    },
  });
}
