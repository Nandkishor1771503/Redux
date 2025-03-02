import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../featuers/counter/counterSlice"
import todoReducer from "../featuers/todo/toDo"

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        todo:todoReducer
    }
})


