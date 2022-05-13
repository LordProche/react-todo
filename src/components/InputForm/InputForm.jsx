import React, {useState} from 'react';
import styles from './InputForm.module.css'
import PlusButton from "../UI/PlusButton/PlusButton";

const InputForm = ({placeholder, onEnter, withButton, onChange, ...props}) => {
    const [inputText, setInputText] = useState('')
    const addTaskByMessage = (message) => {
        if(onEnter){
            onEnter(message)
            setInputText('')
        }
    }
    return (
        <div className={styles.form} {...props}>
            <input type="text"
                   className={styles.input}
                   placeholder={placeholder}
                   onChange={(e) => {
                       setInputText(e.target.value)
                       if(onChange){
                           onChange(e)
                       }
                   }}
                   onKeyDown={(e) => {
                       if(e.key === 'Enter' && inputText){
                           addTaskByMessage(inputText)
                       }
                   }}
                   value={inputText}
            />
            {withButton ?             <
                PlusButton disabled={!inputText} onClick={() => {addTaskByMessage(inputText)}}/>
                :
                null
            }
        </div>
    );
};

export default InputForm;