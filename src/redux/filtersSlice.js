import {createSlice} from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        filterByTitle: ''
    },
    reducers: {
        setFilterByTitle(state, action){
            state.filterByTitle = action.payload
        }
    }
})

export default filtersSlice.reducer
export const {setFilterByTitle} = filtersSlice.actions
