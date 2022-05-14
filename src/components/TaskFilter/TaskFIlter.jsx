import React from 'react';
import Input from "../UI/Input/Input";
import styles from "./TaskFilter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setFilterByTitle} from "../../redux/filtersSlice";

const TaskFilter = () => {
    const filterValue = useSelector(state => state.filtersSlice.filterByTitle)
    const dispatch = useDispatch()

    return (
        <Input
            className={styles.filter_input}
            placeholder='Search'
            value={filterValue}
            onChange={(e) => dispatch(setFilterByTitle(e.target.value))}
        />
    );
};

export default TaskFilter;