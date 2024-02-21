const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className="flex items-center justify-between flex-1 px-12 py-2">
      <label
        className={`flex gap-3 cursor-pointer text-xs max-w-[400px] hover:opacity-100  transition 	 ${
          todo.done ? "line-through decoration-orange-500 opacity-40" : ""
        } `}
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
      <button
        className="text-xs transition opacity-50 hover:opacity-100"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
