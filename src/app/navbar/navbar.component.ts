import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
})
export class NavbarComponent implements OnInit {

  constructor() { }

  phone: string | undefined;
  phoneHref: string | undefined;

  ngOnInit(): void {
    this.phone = ['042', '66', '76567'].join('-');
    this.phoneHref = 'tel:' + ['0', '42', '66', '76567'].join('');
  }

}
