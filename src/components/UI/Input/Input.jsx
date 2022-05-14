import React from 'react';
import styles from './Input.module.css'

const Input = ({children, style, className,  ...props}) => {
    return (
        <div style={style} className={className}>
            <input type="text" className={styles.input} {...props}/>
            {children}
        </div>
    );
};

export default Input;