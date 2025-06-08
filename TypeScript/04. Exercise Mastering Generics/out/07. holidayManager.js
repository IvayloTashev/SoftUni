"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _start;
    _end;
    constructor(startDate, endDate) {
        this.start = startDate;
        this.end = endDate;
    }
    set start(val) {
        if (val > this._end) {
            throw new Error('Start date cannot be after end date');
        }
        this._start = val;
    }
    set end(val) {
        if (val < this._start) {
            throw new Error('End date cannot be before start date');
        }
        this._end = val;
    }
    getInfo() {
        return `Holiday: ${this._start.getDate()}/${this._start.getMonth() + 1}/${this._start.getFullYear()} - ${this._end.getDate()}/${this._end.getMonth() + 1}/${this._end.getFullYear()}`;
    }
}
class HolidayManager {
    holidays = new Map();
    reserveVacation(holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    }
    listReservations() {
        let resut = [];
        Array.from(this.holidays.entries()).forEach(entry => {
            resut.push(`${entry[0].getInfo()} => ${entry[1]}`);
        });
        return resut.join('\n');
    }
}
// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
// let holidayManager = new HolidayManager<Holiday, TravelVacation>();
// holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations())
// let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
// let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
// let holidayManager = new HolidayManager<Holiday, BeachVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
// console.log(holidayManager.listReservations())
let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
//# sourceMappingURL=07.%20holidayManager.js.map