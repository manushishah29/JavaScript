var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thus"] = 3] = "thus";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var whatDay = Days;
console.log(whatDay.mon);
function whatsDay(day) {
    return day;
}
console.log(whatsDay(Days.sat));
