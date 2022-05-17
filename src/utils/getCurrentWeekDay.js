export const getCurrentWeekDay = () => {
    const weekDayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekDayLabels[new Date().getDay()]
}