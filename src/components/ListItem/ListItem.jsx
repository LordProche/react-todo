import React from 'react';

import styles from './ListItem.module.css'

import {useDispatch} from "react-redux";
import {removeTask, toggleIsChecked, changeTaskDescription} from "../../redux/tasksSlice";
import Checkbox from "../UI/Checkbox/Checkbox";
import TrashButton from "../UI/TrashButton/TrashButton";
import TextArea from "../UI/TextArea/TextArea";

const ListItem = ({task, ...params}) => {
    const dispatch = useDispatch()
    const title_classes = task.isChecked ? [styles.checked, styles.title].join(' ') : [styles.title]

    return (
        <div
            className={styles.list_item}
            {...params}
        >
            <Checkbox checked={task.isChecked} onChange={() => dispatch(toggleIsChecked(task.id))}/>
            <p className={title_classes}>
                {task.title}
            </p>

            {task.isChecked ?
                <TrashButton onClick={() => dispatch(removeTask(task.id))}/>
                :
                null
            }

            <TextArea
                value={task.description}
                onChange={(e) => dispatch(changeTaskDescription({
                    id: task.id,
                    description: e.target.value
                }))}
            />
        </div>
    );
};

export default ListItem;