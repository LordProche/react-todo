import React, {useRef} from 'react';
import styles from './TextArea.module.css'

const TextArea = ({onChange, value, ...props}) => {
    const textAreaRef = useRef(null)

    const resizeTextArea = (e) => {
        textAreaRef.current.style.height = 'auto'
        const scrollHeight = textAreaRef.current.scrollHeight
        textAreaRef.current.style.height = scrollHeight + 'px'
        if(onChange){
            onChange(e)
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