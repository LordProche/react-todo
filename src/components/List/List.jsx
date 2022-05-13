import React from 'react';

import ListItem from "../ListItem/ListItem";
import {useSelector} from "react-redux";

import styles from './List.module.css'

const List = () => {
    const tasks = useSelector(state => state.tasksSlice.tasks)
    return (
        <div className={styles.list}>
            {tasks.map(task => (
                <ListItem key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default List;