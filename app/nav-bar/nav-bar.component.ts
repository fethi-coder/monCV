import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})


export class NavBarComponent implements OnInit {

  hauteur: boolean = true;
  hauteur2: boolean = true;
  counterInitiale: number = 0;
  counter: any;

  constructor() { }

  ngOnInit(): void { }

  menuOpen() {
    this.hauteur = false;
    this.hauteur2 = false;

    if (this.counterInitiale % 2 == 1) {
      this.hauteur = true;
      this.hauteur2 = true;

    } else {
      this.hauteur = false;
      this.hauteur2 = false;
    }

    this.counter = this.counterInitiale++;

  }
}
