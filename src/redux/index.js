import {configureStore} from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import filtersSlice from "./filtersSlice";
import calendarSlice from './calendarSlice'

export const store = configureStore({
    reducer: {
        tasksSlice,
        filtersSlice,
        calendarSlice
    }
})