import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: []
    },
    reducers:{
        addTask(state, action){
            const id = state.tasks.length > 0 ? state.tasks[state.tasks.length-1].id + 1 : 0
            state.tasks.push({id, title: action.payload, isChecked:false})
        },
        removeTask(state, action){
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleIsChecked(state, action){
            state.tasks = state.tasks.map(
                task => task.id === action.payload ? {...task, isChecked: !task.isChecked} : task
            )
        },
        changeTaskDescription(state, action){
            state.tasks = state.tasks.map(
                task => task.id === action.payload.id ?
                    {...task, description: action.payload.description}
                    : task
            )
        }
    }
})

export default tasksSlice.reducer
export const {addTask, removeTask, toggleIsChecked, changeTaskDescription} = tasksSlice.actions