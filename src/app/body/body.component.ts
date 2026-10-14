import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    standalone: false
})
export class BodyComponent implements OnInit {

  constructor() { }
  email: string | undefined;
  phone: string | undefined;

  ngOnInit(): void {
    const emailUser = ['h', 'a', 'n', 's', 'd', 'e', 'e', 'p', '.', 's', 'i', 'n', 'g', 'h'].join('');
    const emailDomain = ['hotmail', '.', 'com'].join('');
    this.email = `${emailUser}@${emailDomain}`;
    this.phone = ['042', '66', '76567'].join('-');
  }

}
