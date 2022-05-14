import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import filtersSlice from "./filtersSlice";


export const store = configureStore({
    reducer: {
        tasksSlice,
        filtersSlice
    }
})