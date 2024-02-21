import { useState } from "react";
import SideButtons from "./components/SideButtons";
import TodoList from "./components/TodoList";
import { initialTodos } from "./constants/todos";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(todosFromStorage || initialTodos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const totalTodos = todos.length;

  const totalDoneTodos = todos.filter((todo) => todo.done === true).length;

  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const emptyTodos = () => {
    setTodos([]);
  };

  const resetTodos = () => {
    setTodos(initialTodos);
  };

  const markAllAsDone = () => {
    const newTodos = todos.map((todo) => ({ ...todo, done: true }));
    setTodos(newTodos);
  };

  const markAllAsNotdone = () => {
    const newTodos = todos.map((todo) => ({ ...todo, done: false }));
    setTodos(newTodos);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-orange-200 ">
      <div className="w-[720px] bg-white h-[640px] rounded-lg overflow-hidden">
        <div className="flex flex-col h-full">
          <Header totalTodos={totalTodos} totalDoneTodos={totalDoneTodos} />
          <div className="flex flex-1 overflow-y-scroll overflow-x-clip">
            <div className="flex-1 border-r-[1px] border-r-black/5  ">
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            </div>
            <SideButtons
              addTodo={addTodo}
              emptyTodos={emptyTodos}
              resetTodos={resetTodos}
              markAllAsDone={markAllAsDone}
              markAllAsNotdone={markAllAsNotdone}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
