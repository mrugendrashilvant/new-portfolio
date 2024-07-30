import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'my-portfolio';
  mainHeight: number = 100;

  ngAfterViewInit() {
    this.mainHeight = window.innerHeight - 53;
  }
}
