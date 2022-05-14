const filterTasks = (list, paramToFilter, filterValue) => {
    return list.filter(task => {
        const taskParamValueLower = task[paramToFilter].toLowerCase();
        const filterValueLower = filterValue.toLowerCase();
        return taskParamValueLower.includes(filterValueLower)
    })
}

export default filterTasks