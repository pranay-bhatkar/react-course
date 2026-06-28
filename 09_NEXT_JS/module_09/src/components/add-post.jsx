"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import React from "react";

const addPost = async (newPost) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

const AddPost = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      alert("Post added");
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <div>
      <button
        className="bg-indigo-600 p-2 cursor-pointer rounded-lg"
        onClick={() =>
          mutation.mutate({
            title: "new post by Pranay",
            body: "Demo",
            userId: "1",
          })
        }
      >
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
