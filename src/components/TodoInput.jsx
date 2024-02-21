import { useState } from "react";
import Button from "./Button";
import { useRef } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setError(" Can not be blank.");
      ref.current.focus();
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      text: input,
    };

    addTodo(newTodo);

    ref.current.focus();
    setInput("");
    setError("");
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        Add a todo
        <input
          ref={ref}
          type="text"
          className="bg-black/5 placeholder:italic outline-none p-2 rounded hover:bg-black/10 transition text-xs"
          placeholder="Charger..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <Button>Add to the bag</Button>
      <p className="text-red-400 text-xs font-bold">{error}</p>
    </form>
  );
};

export default TodoInput;
