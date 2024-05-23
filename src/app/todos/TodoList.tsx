import { Todo } from "@/typings";
import Link from "next/link";
import React from "react";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};
async function TodoList() {
  const todosData = fetchTodos();
  return (
    <>
      {(await todosData).map((todo) => {
        return (
          <div key={todo.id}>
            <Link href={`/todos/${todo.id}`}>TODO: {todo.id}</Link>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
