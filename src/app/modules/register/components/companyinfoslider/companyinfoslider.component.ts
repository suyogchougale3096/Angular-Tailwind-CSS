import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companyinfoslider',
  templateUrl: './companyinfoslider.component.html',
  styleUrls: ['./companyinfoslider.component.css']
})
export class CompanyinfosliderComponent implements OnInit {

  imgArray = [
    {
      imgUrl : 'favicon.ico', companyName : "A"
    },
    {
      imgUrl : 'favicon.ico', companyName : "B"
    },
    {
      imgUrl : 'favicon.ico', companyName : "C"
    },
    {
      imgUrl : 'favicon.ico', companyName : "D"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
