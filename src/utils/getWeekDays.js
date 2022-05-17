const getWeekDays = () => {
    const currentDate = new Date;
    const firstDayOfWeek = currentDate.getDate() - currentDate.getDay();
    const lastDayOfWeek = firstDayOfWeek + 6;
    const result = []
    for(let i = firstDayOfWeek; i <= lastDayOfWeek; i++){
        result.push(new Date(currentDate.setDate(i)))
    }
    return result
}

export default getWeekDays