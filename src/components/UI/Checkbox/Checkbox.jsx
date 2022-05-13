import React from 'react';
import styles from './Checkbox.module.css'
const Checkbox = ({...props}) => {
    return (
        <label>
            <input className={styles.checkbox_input} type="checkbox" {...props}/>
            <span className={styles.checkbox_box}></span>
        </label>
    );
};

export default Checkbox;