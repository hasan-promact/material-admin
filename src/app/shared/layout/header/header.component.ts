import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output() navToggle = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }
navOpen() {
    this.navToggle.emit(true);
  }
}
