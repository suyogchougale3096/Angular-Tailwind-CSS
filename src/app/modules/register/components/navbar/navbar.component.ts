import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobile_screen : boolean = false;
  big_screen : boolean = true;
  
  constructor(private element : ElementRef) {
   }

  ngOnInit(): void {
  }

  handleMenu(){
    this.mobile_screen = !this.mobile_screen;
    // if(this.mobile_screen) this.big_screen = !this.mobile_screen
  }
}
