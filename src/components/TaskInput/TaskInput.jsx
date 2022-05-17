import React, {useState} from 'react';
import styles from "./TaskInput.module.css";
import PlusButton from "../UI/PlusButton/PlusButton";
import Input from "../UI/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../redux/tasksSlice";

const TaskInput = () => {
    const dispatch = useDispatch()
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const selectedWeekDay = useSelector(state => state.calendarSlice.selectedDay)

    const createTask = () => {
        dispatch(addTask({title: newTaskTitle, day:selectedWeekDay}))
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