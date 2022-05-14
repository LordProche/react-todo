import React from 'react';
import List from "../List/List";
import {useSelector} from "react-redux";
import filterTasks from "../../utils/filterTasks";

const FilteredList = () => {
    const tasks = useSelector(state => state.tasksSlice.tasks)
    const filterByTitleValue = useSelector(state => state.filtersSlice.filterByTitle)
    const filteredTasks = filterByTitleValue ? filterTasks(tasks, 'title', filterByTitleValue) : tasks
    return (
        <>
            <List tasks={filteredTasks}/>
        </>
    );
};

export default FilteredList;