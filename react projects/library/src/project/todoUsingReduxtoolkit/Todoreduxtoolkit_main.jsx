import React from "react";
import { store } from "../../app/todostore";
import { Provider } from "react-redux";
import TodoForm from "./Todoform";
import Tolist from "./Tolist";
function Todoreduxtoolkit_main() {
  return (
    <Provider store={store}>
      <div className="h-full w-full bg-black ">
        <h1 className="text-white text-5xl self-center">Learn about redux toolkit</h1>
        <TodoForm />
        <Tolist />
      </div>
    </Provider>
  );
}

export default Todoreduxtoolkit_main;
