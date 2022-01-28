import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  icon = [
    {
      url: '/assets/img/icon/angular.png',
      alt: 'logos angular',
      info: 'logos angular',
    },
    {
      url: '/assets/img/icon/java.png',
      alt: 'logos java',
      info: 'logos java'
    },
    {
      url: '/assets/img/icon/javascript.png',
      alt: 'logos javascript',
      info: 'logos javascript',
    },
    {
      url: '/assets/img/icon/mysql.png',
      alt: 'logos mysql',
      info: 'logos mysql',
    },
    {
      url: '/assets/img/icon/github.png',
      alt: 'logos github',
      info: 'logos github',
    },
    {
      url: '/assets/img/icon/bootstrap.svg',
      alt: 'logos bootstrap',
      info: 'logos bootstrap',
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
