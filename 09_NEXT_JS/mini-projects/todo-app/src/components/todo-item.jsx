import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";

const TodoItem = ({ todo }) => {
  return (
    <div className="flex flex-row justify-between shadow-2xs border-2 p-1 rounded-sm shadow-gray-800">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.complete}
          onCheckedChange={() => {}}
          id={`todo-${todo._id}`}
          className="border-2 border-black"
        />
        <label
          htmlFor={`todo-${todo._id}`}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
            todo.completed && "line-throgh text-muted-foreground",
          )}
        >
          {todo.title}
        </label>
      </div>
      <Button variant="destructive" size="icon" onClick={() => {}}>
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default TodoItem;
