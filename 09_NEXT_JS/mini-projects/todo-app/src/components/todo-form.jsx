"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { addTodo } from "../../actions/todo-actions";
import { toast } from "sonner";
import { Plus } from "lucide-react";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const mutation = useMutation({
    mutationFn: (data) => addTodo(data),
    onSuccess: () => {
      // todo: invalidation
      toast.success("Todo added successfully");
    },
    onError: (error) => {
      toast.error("Failed to add todo");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate(
      { title },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["todos"],
          });
          console.log("Success");
          setTitle("");
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <Input
        type={"text"}
        value={title}
        placeholder="Add a new task"
        onChange={(e) => setTitle(e.target.value)}
        className={"flex-1 border-2 border-black"}
        disabled={mutation.isPending}
      />
      <Button type="submit">
        <Plus size={20} className="" />
        {mutation.isPending ? "Adding..." : "Add"}
      </Button>
    </form>
  );
};

export default TodoForm;
