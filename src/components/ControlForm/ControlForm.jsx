import React, {useState} from 'react';

import {addTask} from "../../redux/tasksSlice";
import {useDispatch} from "react-redux";

import Input from "../UI/Input/Input";
import PlusButton from "../UI/PlusButton/PlusButton";

import styles from './ControlForm.module.css';

const ControlForm = () => {
    const dispatch = useDispatch()
    const [newTaskTitle, setNewTaskTitle] = useState('')

    const createTask = () => {
        dispatch(addTask(newTaskTitle))
        setNewTaskTitle('')
    }

    const addTaskByEnter = (e) => {
        if(e.key === 'Enter' && newTaskTitle){
           createTask()
        }
    }

    return (
        <div className={styles.form}>
            <Input
                placeholder='Add task'
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={addTaskByEnter}
                className={styles.task_input}
            >
                <PlusButton disabled={!newTaskTitle} onClick={createTask}/>
            </Input>

            {/*<Input placeholder='Search' onChange={(e) => console.log(e.target.value)} style={{marginTop: '10px'}}/>*/}
        </div>
    );
};

export default ControlForm;