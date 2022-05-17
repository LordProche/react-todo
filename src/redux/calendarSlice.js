import {createSlice} from "@reduxjs/toolkit";

const calendarSlice = createSlice({
    name: 'calendar',
    initialState:{
        weekInfo: [

        ],
        selectedDay: ''
    },
    reducers: {
        setSelectedDay(state, action){
            state.selectedDay = action.payload
        },
        setWeekInfo(state, action){
            state.weekInfo = action.payload
        }
    }
})

export default calendarSlice.reducer
export const {setSelectedDay, setWeekInfo} = calendarSlice.actions