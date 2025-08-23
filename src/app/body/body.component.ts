import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }
  date: string | undefined;


  pdateTimeDifference() {
    const startDate = new Date('2022-10-01T00:00:00Z');
    const now = new Date();

    let years = now.getUTCFullYear() - startDate.getUTCFullYear();
    let months = now.getUTCMonth() - startDate.getUTCMonth();
    let days = now.getUTCDate() - startDate.getUTCDate();
    let hours = now.getUTCHours() - startDate.getUTCHours();
    let minutes = now.getUTCMinutes() - startDate.getUTCMinutes();
    let seconds = now.getUTCSeconds() - startDate.getUTCSeconds();

    // Normalize the differences if negative
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      // Calculate days in previous month
      const prevMonth = new Date(now.getUTCFullYear(), now.getUTCMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    let dt =
      `${years} years, ${months} months, ${days} days   Time-` +
      `${hours} : ${minutes} : ${seconds}  `;
    return dt;
  }

  ngOnInit(): void {
    const date1 = new Date('7/13/2010');
    setInterval(() => {
      this.date = (this.pdateTimeDifference())
    }, 1000)
  }

}
