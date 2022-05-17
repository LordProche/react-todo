import React from 'react';
import List from "../List/List";
import {useSelector} from "react-redux";

import {entryFilter, matchFilter} from "../../utils/filtersTasks";

const FilteredList = () => {
    const tasks = useSelector(state => state.tasksSlice.tasks)
    const filterByTitleValue = useSelector(state => state.filtersSlice.filterByTitle)
    const filterByDayValue = useSelector(state => state.calendarSlice.selectedDay)

    const listFilteredByWeekDay = filterByDayValue ? matchFilter(tasks, 'day', filterByDayValue) : tasks
    const listFilteredByTitle = filterByTitleValue
        ? entryFilter(listFilteredByWeekDay, 'title', filterByTitleValue)
        : listFilteredByWeekDay

    return (
        <>
            <List tasks={listFilteredByTitle}/>
        </>
    );
};

export default FilteredList;