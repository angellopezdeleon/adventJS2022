function countHours(year, holidays) {
    return holidays
        .filter(diaMes => new Date(diaMes + "/" + year).getDay() % 6)
        .length * 2
}