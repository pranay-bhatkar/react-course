"use client";

import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

export default function PostList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>Error in fetching posts : {error}</p>;

  return (
    <div>
      {data.slice(0, 5).map((post) => (
        <p key={post.id}>
          {post.id} - {post.title}
        </p>
      ))}
    </div>
  );
}
