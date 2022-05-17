const formatWeekDays = (date) => {
    const weekDayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return date.map(day => (
            {
                weekDay: weekDayLabels[day.getDay()],
                day: day.getDate(),
                isCurrent: new Date().getDate() === day.getDate()
            }
        )
    )
}

export default formatWeekDays