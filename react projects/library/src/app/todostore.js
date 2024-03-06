import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../Features/todoreduxtoolkit/todoSlice"

export const store = configureStore({
    reducer: todoReducer
})