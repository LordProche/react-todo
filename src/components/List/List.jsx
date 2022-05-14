import React from 'react';

import ListItem from "../ListItem/ListItem";

import styles from './List.module.css'

const List = ({tasks}) => {
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