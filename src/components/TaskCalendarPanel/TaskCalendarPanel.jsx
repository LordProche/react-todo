import React, {useEffect} from 'react';

import TaskCalendar from "../TaskCalendar/TaskCalendar";

import getWeekInfo from "../../utils/getWeekInfo";
import {getCurrentWeekDay} from "../../utils/getCurrentWeekDay";

import {useDispatch, useSelector} from "react-redux";
import {setSelectedDay, setWeekInfo} from "../../redux/calendarSlice";


import styles from './TaskCalendarPanel.module.css'


const TaskCalendarPanel = () => {

    const dispatch = useDispatch()
    const weekInfo = useSelector(state => state.calendarSlice.weekInfo)
    const currentWeekDay = useSelector(state => state.calendarSlice.selectedDay)
    useEffect(() => {
        dispatch(setWeekInfo(getWeekInfo()))
        dispatch(setSelectedDay(getCurrentWeekDay()))
    }, [])

    return (
        <div className={styles.calendar_panel}>
            {weekInfo.map((weekInfo, index) => (
                <TaskCalendar
                    key={index}
                    weekDay={weekInfo.weekDay}
                    day={weekInfo.day}
                    isActive={weekInfo.weekDay === currentWeekDay}
                    width={94}
                    height={102}
                    onClick={() => dispatch(setSelectedDay(weekInfo.weekDay))}
                />

            ))}
        </div>
    );
};

export default TaskCalendarPanel;