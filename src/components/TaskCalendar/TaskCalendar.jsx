import React from 'react';
import styles from './TaskCalendar.module.css'
import { useSelector} from "react-redux";

const TaskCalendar = ({weekDay, day, isActive,  width, height, ...props}) => {

    const shortWeekDay = weekDay.substring(0, 2)
    const formattedDay = day < 10 ? `0${day}` : day;
    const tasks = useSelector(state => state.tasksSlice.tasks)
    const countOfTasksByDay = tasks.reduce((prev, current) => current.day === weekDay ? prev + 1 : prev, 0)

    return (
        <div
            className={ [styles.calendar, isActive ? styles.active : ''].join(' ')}
            style={{width, height}}
            {...props}
        >
            <span className={styles.weekDay}>{shortWeekDay}</span>
            <span className={styles.day}>{formattedDay}</span>
            {countOfTasksByDay ?
                <p className={styles.count_of_posts}>{countOfTasksByDay}</p>
                :
                null
            }
        </div>
    );
};

export default TaskCalendar;