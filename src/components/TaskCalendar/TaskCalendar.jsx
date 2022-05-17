import React from 'react';
import styles from './TaskCalendar.module.css'

const TaskCalendar = ({weekDay, day, isActive,  width, height}) => {

    const shortWeekDay = weekDay.substring(0, 2)
    const formattedDay = day < 10 ? `0${day}` : day;

    const calendarStyles = {
        width,
        height
    }

    return (
        <div className={ [styles.calendar, isActive ? styles.active : ''].join(' ')} style={calendarStyles}>
            <span className={styles.weekDay}>{shortWeekDay}</span>
            <span className={styles.day}>{formattedDay}</span>
        </div>
    );
};

export default TaskCalendar;