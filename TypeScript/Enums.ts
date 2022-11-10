enum Days
{
    mon,tue,wed,thus,fri,sat,sun
}
let whatDay=Days
console.log(whatDay.mon)

function whatsDay(day:Days)
{
    return day
}
console.log(whatsDay(Days.sat))