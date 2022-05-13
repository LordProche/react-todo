import React, {useRef, useState, useEffect} from 'react';
import styles from './TextArea.module.css'

const TextArea = ({onChange, value, ...props}) => {
    const textAreaRef = useRef(null)

    const resizeTextArea = (e) => {
        if(textAreaRef && textAreaRef.current){
            textAreaRef.current.style.height = '20px'
            const scrollHeight = textAreaRef.current.scrollHeight
            textAreaRef.current.style.height = scrollHeight + 'px'
            if(onChange){
                onChange(e)
            }
        }
    }
    return (
        <textarea
            ref={textAreaRef}
            className={styles.textarea}
            placeholder='Description...'
            onChange={resizeTextArea}
            value={value}
            {...props}
        />
    );
};

export default TextArea;