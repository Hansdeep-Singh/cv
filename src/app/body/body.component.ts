import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    standalone: false
})
export class BodyComponent implements OnInit {

  constructor() { }
  date: string | undefined;
  email: string | undefined;
  phone: string | undefined;


  pdateTimeDifference() {
    const startDate = new Date('2026-01-12T00:00:00Z');
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

    const emailUser = ['h', 'a', 'n', 's', 'd', 'e', 'e', 'p', '.', 's', 'i', 'n', 'g', 'h'].join('');
    const emailDomain = ['hotmail', '.', 'com'].join('');
    this.email = `${emailUser}@${emailDomain}`;
    this.phone = ['042', '66', '76567'].join('-');
  }

}
