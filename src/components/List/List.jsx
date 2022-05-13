import React from 'react';

import ListItem from "../ListItem/ListItem";
import {useSelector} from "react-redux";

import styles from './List.module.css'

const List = () => {
    const tasks = useSelector(state => state.tasksSlice.tasks)
    return (

        tasks.length > 0 ?
            <div className={styles.list}>
                {tasks.map(task => (
                    <ListItem key={task.id} task={task}/>
                ))}
            </div>
            :
            <p className={styles.empty_info}>Nothing here</p>


    );
};

export default List;