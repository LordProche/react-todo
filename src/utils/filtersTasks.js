export const entryFilter = (list, paramToFilter, filterValue) => {
    return list.filter(task => {
        const taskParamValueLower = task[paramToFilter].toLowerCase();
        const filterValueLower = filterValue.toLowerCase();
        return taskParamValueLower.includes(filterValueLower)
    })
}

export const matchFilter = (list, paramToFilter, filterValue) => {
    return list.filter(task => task[paramToFilter] === filterValue)
}

