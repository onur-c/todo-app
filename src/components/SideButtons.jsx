import Button from "./Button";
import TodoInput from "./TodoInput";

const SideButtons = ({
  addTodo,
  emptyTodos,
  resetTodos,
  markAllAsDone,
  markAllAsNotdone,
}) => {
  return (
    <div className="sticky top-0 flex flex-col justify-between p-4 bg-orange-50">
      <TodoInput addTodo={addTodo} />
      <div className="flex flex-col gap-2">
        <Button onClick={markAllAsDone}>Mark all as done</Button>
        <Button onClick={markAllAsNotdone}>Mark all as not done</Button>
        <Button onClick={resetTodos}>Reset</Button>
        <Button onClick={emptyTodos}>Remove all</Button>
      </div>
    </div>
  );
};

export default SideButtons;
