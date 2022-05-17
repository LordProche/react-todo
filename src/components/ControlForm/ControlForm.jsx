import React from 'react';

import styles from './ControlForm.module.css';

import TaskInput from "../TaskInput/TaskInput";
import TaskFilterByTitle from "../TaskFilterByTitle/TaskFilterByTitle";
import TaskCalendarPanel from "../TaskCalendarPanel/TaskCalendarPanel";

const ControlForm = () => {
    return (
        <div className={styles.form}>
            <TaskInput/>
            <TaskFilterByTitle/>
            <TaskCalendarPanel/>
        </div>
    );
};

export default ControlForm;