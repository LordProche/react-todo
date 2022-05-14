import React, {useState} from 'react';
import styles from "./TaskInput.module.css";
import PlusButton from "../UI/PlusButton/PlusButton";
import Input from "../UI/Input/Input";
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/tasksSlice";

const TaskInput = () => {
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
        <Input
            placeholder='Add task'
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={addTaskByEnter}
            className={styles.task_input}
        >
            <PlusButton disabled={!newTaskTitle} onClick={createTask}/>
        </Input>
    );
};

export default TaskInput;