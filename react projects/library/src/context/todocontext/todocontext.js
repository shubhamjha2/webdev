import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 0, title: "", completed: false }],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  toggleTodo: (id) => {},
  editTodo: (todo,id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext() {
    return useContext(TodoContext);
}
