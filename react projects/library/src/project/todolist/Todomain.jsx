import React, { useEffect, useState } from "react";
import { TodoContextProvider } from "../../context/todocontext/todocontext";
import TodoForm from "./Todoform";
import TodoItem from "./Todoitemlist";
function Todomain() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    settodos((pre) => [{ id: Date.now(), ...todo }, ...pre]);
  };
  const removeTodo = (id) => {
    settodos((pre) => pre.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id) => {
    settodos((pre) =>
      pre.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editTodo = (id, updatedTodo) => {
    settodos((pre) =>
      pre.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && storedTodos.length > 0) {
      settodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, removeTodo, toggleTodo, editTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default Todomain;
