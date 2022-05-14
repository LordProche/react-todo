import React from 'react';

import styles from './ControlForm.module.css';

import TaskInput from "../TaskInput/TaskInput";
import TaskFilter from "../TaskFilter/TaskFIlter";

const ControlForm = () => {
    return (
        <div className={styles.form}>
            <TaskInput/>
            <TaskFilter/>
        </div>
    );
};

export default ControlForm;