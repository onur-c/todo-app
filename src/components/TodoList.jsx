/* eslint-disable no-unused-vars */
import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  const [sortMethod, setSortMethod] = useState("default");

  const sortedTodos = [...todos].sort((x, y) => {
    if (sortMethod === "done") {
      return y.done - x.done;
    } else if (sortMethod === "not-done") {
      return x.done - y.done;
    }
  });

  return (
    <div className="relative flex flex-col justify-center gap-2 ">
      {todos.length ? (
        <>
          <div className="flex items-center justify-center p-4">
            <select
              onChange={(e) => setSortMethod(e.target.value)}
              className="border-[1px] border-black/5 p-2 rounded-lg w-2/3 text-center outline-none cursor-pointer "
            >
              <option selected value="default">
                Sort by default
              </option>
              <option value="done">Sort by done</option>
              <option value="not-done">Sort by not done</option>
            </select>
          </div>
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          ))}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-1 font-bold mt-60 ">
          <p className="text-xl">Empty.</p>
          <p className="text-xs opacity-70">
            You can add a todo from top right.
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
