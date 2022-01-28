import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _title = 'fethi';
  public get title() {
    return this._title;
  }
  public set title(value) {
    this._title = value;
  }
  scrollToElement1($element: any): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });


  }
}
