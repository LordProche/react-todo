import React from 'react';

import TaskCalendar from "../TaskCalendar/TaskCalendar";

import styles from './TaskCalendarPanel.module.css'
import getWeekDays from "../../utils/getWeekDays";
import formatWeekDays from "../../utils/formatWeekDays";

const TaskCalendarPanel = () => {
    const weekDays = getWeekDays()
    const formattedWeekDays = formatWeekDays(weekDays)

    return (
        <div className={styles.calendar_panel}>
            {formattedWeekDays.map((weekDay, index) => (
                <TaskCalendar
                    key={index}
                    weekDay={weekDay.weekDay}
                    day={weekDay.day}
                    isActive={weekDay.isCurrent}
                    width={94}
                    height={102}/>
            ))}
        </div>
    );
};

export default TaskCalendarPanel;