var DAYS;
(function (DAYS) {
    DAYS[DAYS["MONDAY"] = 0] = "MONDAY";
    DAYS[DAYS["TUESDAY"] = 1] = "TUESDAY";
    DAYS[DAYS["WEDNESDAY"] = 2] = "WEDNESDAY";
    DAYS[DAYS["THURSDAY"] = 3] = "THURSDAY";
    DAYS[DAYS["FRIDAY"] = 4] = "FRIDAY";
    DAYS[DAYS["SATURDAY"] = 5] = "SATURDAY";
    DAYS[DAYS["SUNDAY"] = 6] = "SUNDAY";
})(DAYS || (DAYS = {}));
let day = DAYS.MONDAY;
console.log(day);
console.log(DAYS[5]);
console.log(DAYS);
