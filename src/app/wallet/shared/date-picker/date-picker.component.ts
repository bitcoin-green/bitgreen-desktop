import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  today: Date;
  days: any;
  months: any;
  todayDate: number;
  todayDay: number;
  todayMonth: number;
  todayYear: number;
  todayDayName: string;
  todayMonthName: string;
  firstWeekRemainder: any;
  lastDay: any;
  lastDayDate: any;
  colorsOfTheMonths: string[];
  monthColor: string;
  selectedDate: Date;
  selectedDateMonth: number;
  selectedDateMonthName: string;
  selectedDateDay: number;
  selectedDateDayName: string;
  currentMonth: any;

  constructor() {
    this.today = new Date();

    this.days = {
      long: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.todayDate = this.today.getDate();
    this.todayDay = this.today.getDay();
    this.todayMonth = this.today.getMonth();
    this.todayYear = this.today.getFullYear();
    this.todayDayName = this.days.long[this.todayDay];
    this.todayMonthName = this.months[this.todayMonth];

    this.lastDay = new Date(this.todayYear, this.todayMonth + 1, 0);

    this.lastDayDate = this.lastDay.getDate();
    this.colorsOfTheMonths = [
      "#8fd4e3",
      "#9ae3d3",
      "#8ee3a2",
      "#a4e38c",
      "#d3e38b",
      "#e3e08a",
      "#e3b87c",
      "#e39171",
      "#e34c4c",
      "#e34d89",
      "#d04fe3",
      "#575be3",
    ];
    this.monthColor = this.colorsOfTheMonths[this.todayMonth];
    this.selectedDate = this.today;
    this.selectedDateMonth = this.selectedDate.getMonth();
    this.selectedDateMonthName = this.months[this.selectedDateMonth];
    this.selectedDateDay = this.selectedDate.getDay();
    this.selectedDateDayName = this.days.long[this.selectedDateDay];
    this.currentMonth = {
      month: "",
      year: "",
      monthName: "",
      date: this.today,
      dates: [],
      firstDate: null,
      lastDate: null,
    };
  }

  createMonth = (date, lastDay) => {
    this.currentMonth.date = date;
    this.currentMonth.year = date.getFullYear();
    this.currentMonth.dates = [];
    this.currentMonth.month = date.getMonth();
    this.currentMonth.monthName = this.months[date.getMonth()];
    this.monthColor = this.colorsOfTheMonths[this.currentMonth.month];

    let i = 1;
    let startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDate = new Date(date.getFullYear(), date.getMonth(), lastDay);

    if (startDate.getDay() !== 0) {
      for (let j = startDate.getDay() - 1; j >= 0; j--) {
        let newDate = new Date(
          startDate.getFullYear(),
          startDate.getMonth(),
          1
        );
        newDate.setDate(startDate.getDate() - j - 1);
        this.currentMonth.dates.push({
          date: newDate,
          today: false,
          selected: false,
          id: "id" + (0 - j - 1),
          show: true,
          prev: true,
        });
      }
    }

    for (i; i <= lastDay; i++) {
      let newDate = new Date(date.getFullYear(), date.getMonth(), i);
      if (
        this.compareDates(newDate, this.today) &&
        this.compareDates(newDate, this.selectedDate)
      ) {
        this.currentMonth.dates.push({
          date: newDate,
          today: true,
          selected: true,
          id: "id" + i,
          show: true,
        });
      } else if (this.compareDates(newDate, this.today)) {
        this.currentMonth.dates.push({
          date: newDate,
          today: true,
          selected: false,
          id: "id" + i,
          show: true,
        });
      } else if (this.compareDates(newDate, this.selectedDate)) {
        this.currentMonth.dates.push({
          date: newDate,
          today: false,
          selected: true,
          id: "id" + i,
          show: true,
        });
      } else {
        this.currentMonth.dates.push({
          date: newDate,
          today: false,
          selected: false,
          id: "id" + i,
          show: true,
        });
      }
    }

    if (lastDate.getDay() !== 6) {
      for (let index = 1, j = lastDate.getDay() + 1; j <= 6; j++, index++) {
        let newDate = new Date(
          lastDate.getFullYear(),
          lastDate.getMonth(),
          lastDay
        );
        newDate.setDate(lastDate.getDate() + index);
        this.currentMonth.dates.push({
          date: newDate,
          today: false,
          selected: false,
          id: "id" + (lastDate.getDate() + index),
          show: true,
          next: true,
        });
      }
    }
    return;
  };

  findDateIndex = (id) => {
    let i = 0;
    let length = this.currentMonth.dates.length;
    for (i; i < length; i++) {
      let newId = this.currentMonth.dates[i].id;
      if (newId === id) {
        return i;
      }
    }
    return;
  };

  compareDates = (date1, date2) => {
    let month1 = date1.getMonth();
    let month2 = date2.getMonth();
    let actualDate1 = date1.getDate();
    let actualDate2 = date2.getDate();
    let year1 = date1.getFullYear();
    let year2 = date2.getFullYear();
    if (month1 === month2 && year1 === year2 && actualDate1 === actualDate2) {
      return true;
    } else {
      return false;
    }
  };

  SelectDate = (id, status, data) => {
    if (status) {
      let index = this.findDateIndex(id);
      let length = this.currentMonth.dates.length;
      let i = 0;
      for (i; i < length; i++) {
        this.currentMonth.dates[i].selected = false;
      }
      this.currentMonth.dates[index].selected = true;
      this.selectedDate = this.currentMonth.dates[index].date;
      this.selectedDateMonth = this.selectedDate.getMonth();
      this.selectedDateMonthName = this.months[this.selectedDateMonth];
      this.selectedDateDay = this.selectedDate.getDay();
      this.selectedDateDayName = this.days.long[this.selectedDateDay];
    }

    if (data.prev) {
      this.previousMonth(this.currentMonth.date);
    } else if (data.next) {
      this.nextMonth(this.currentMonth.date);
    }
    return;
  };

  nextMonth = (date) => {
    if (date.getMonth() === 11) {
      let newMonthDate = new Date(date.getFullYear() + 1, 0, 1);
      let newMonthLastDay = new Date(date.getFullYear() + 1, 1, 0);
      let newMonthLastDayDate = newMonthLastDay.getDate();
      this.createMonth(newMonthDate, newMonthLastDayDate);
      return;
    } else {
      let newMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      let newMonthLastDay = null;
      if (date.getMonth() === 10) {
        newMonthLastDay = new Date(date.getFullYear() + 1, 0, 0);
      } else {
        newMonthLastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
      }
      let newMonthLastDayDate = newMonthLastDay.getDate();
      this.createMonth(newMonthDate, newMonthLastDayDate);
      return;
    }
  };

  previousMonth = (date) => {
    let newMonthDate = null;
    let newMonthLastDay = null;

    if (date.getMonth() === 0) {
      newMonthDate = new Date(date.getFullYear() - 1, 11, 1);
      newMonthLastDay = new Date(date.getFullYear(), 0, 0);
    } else {
      newMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      newMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    }
    let newMonthLastDayDate = newMonthLastDay.getDate();
    this.createMonth(newMonthDate, newMonthLastDayDate);
    return;
  };

  getDateFromString(date) {
    return new Date(date).getDate();
  }

  ngOnInit() {
    this.createMonth(this.today, this.lastDayDate);
  }
}
