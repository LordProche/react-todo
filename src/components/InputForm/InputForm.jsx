import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/tasksSlice";

const InputForm = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()
    const addTaskByMessage = (message) => {
        dispatch(addTask(message))
        setInputText('')
    }
    return (
        <div>
            <input type="text"
                   onChange={(e) => setInputText(e.target.value)}
                   onKeyDown={(e) => {
                       if(e.key === 'Enter' && inputText){
                           addTaskByMessage(inputText)
                       }
                   }}
                   value={inputText}
            />
            <button
                disabled={inputText ? false: true}
                onClick={() => {addTaskByMessage(inputText)}}
            >
                Add task
            </button>
        </div>
    );
};

export default InputForm;