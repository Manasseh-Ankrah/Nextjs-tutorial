import { Todo } from "@/typings";
import { notFound } from "next/navigation";
import React from "react";

export const dynamic = true;
type PageProps = {
  params: { todoID: string };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todos: Todo = await res.json();
  return todos;
};

const TodoPage = async (props: PageProps) => {
  let todoId = props.params.todoID;
  const todo = await fetchTodo(todoId);

  if (!todo.id) return notFound();

  return (
    <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className='border-t border-black mt-5 text-right'>
        By User: {todo.userId}
      </p>
    </div>
  );
};

export default TodoPage;

export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  // For DEMO purposes only, in order not to be rate limited by the api.
  const trimmedTodos = todos.slice(0, 10);

  return trimmedTodos.map((todo) => {
    return { todoID: todo.id.toString() };
    // return { params: { todoID: todo.id.toString() } };
  });

  // format: [{todoID: '1'},[{todoID: '2'}]
};
