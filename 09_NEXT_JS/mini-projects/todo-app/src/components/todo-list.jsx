'use client'

import React from "react";
import TodoItem from "./todo-item";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../../actions/todo-actions";
import { Loader2 } from "lucide-react";

const TodoList = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodo(),
  });

  if (isPending) {
    return <Loader2 className="animate-spin" />;
  }

  if (error) {
    return (
      <div className="flex justify-center p-8">
        Failed to load todo. {error}
      </div>
    );
  }

  if (!todos && todos.length === 0) {
    return (
      <div classname="text-center p-8 text-muted-foreground">
        No tasks yet, Add to get started
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
