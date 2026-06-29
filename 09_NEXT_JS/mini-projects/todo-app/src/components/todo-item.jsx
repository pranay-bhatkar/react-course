import React from "react";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../../actions/todo-actions";
import { toast } from "sonner";

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();
  const { mutate: toggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to toggle todo");
    },
  });

  const { mutate: remove } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      toast.success("Todo deleted successfully.");
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
    onError: (error) => {
      console.log(error);
      console.error(error);
      toast.error("Failed to delete todo");
    },
  });

  return (
    <div className="flex flex-row justify-between shadow-2xs border-2 p-1 rounded-sm shadow-gray-800">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={(checked) =>
            toggle({ id: todo._id, completed: checked })
          }
          id={`todo-${todo._id}`}
          className="border-2 border-black"
        />
        <label
          htmlFor={`todo-${todo._id}`}
          className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer",
            todo.completed && "line-through text-muted-foreground",
          )}
        >
          {todo.title}
        </label>
      </div>
      <Button
        className="cursor-pointer"
        variant="destructive"
        size="icon"
        onClick={() => remove(todo._id)}
      >
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default TodoItem;
