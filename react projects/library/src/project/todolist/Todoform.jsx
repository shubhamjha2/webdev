import React, { useState } from 'react';
import useTodoContext from '../../context/todocontext/todocontext';

function TodoForm() {
    const [todo, settodo] = useState("");
    const { addTodo } = useTodoContext();

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        console.log(todo);
        addTodo({ todo, completed: false }); // corrected property name
        settodo("");
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => settodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
