import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.hero {background-image: url("/src/assets/bg-img.jpg") !important; ' +
  'background-size: cover; background-position: center center;}'],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
