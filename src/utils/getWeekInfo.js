import getWeekDays from "./getWeekDays";

const getWeekInfo = () => {
    const date = getWeekDays()
    const weekDayLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return date.map(day => {
            return {
                weekDay: weekDayLabels[day.getDay()],
                day: day.getDate(),
            }
        }
    )
}

export default getWeekInfo