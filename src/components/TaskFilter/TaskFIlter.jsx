import React from 'react';
import Input from "../UI/Input/Input";
import styles from "./TaskFilter.module.css";

const TaskFilter = () => {
    return (
        <Input className={styles.filter_input} placeholder='Search'/>
    );
};

export default TaskFilter;