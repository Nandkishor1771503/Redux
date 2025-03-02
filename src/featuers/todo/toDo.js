import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(

    {
        name: "todo",
        initialState: {
            task: []
        },
        reducers: {
            addTask: (state, action) => { state.task.push(action.payload); },
            removeTask: (state, action) => {
                state.task = state.task.filter((a, index) => index !== action.payload)     // if index of the span in todo.jsx which has sent as 
            // console.log(action.payload)                                                // parameter to this function if the index is equal to 
              },                                                                          // the action.payload then that task will not be        
            clearTask: state => { state.task = [] }                                       // considered in task array
        }
    }
)


export const { addTask, removeTask, clearTask } = todoSlice.actions
export default todoSlice.reducer