import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepfeature',
  templateUrl: './stepfeature.component.html',
  styleUrls: ['./stepfeature.component.css']
})
export class StepfeatureComponent implements OnInit {

  features = ["Windows", "Unix","Windows", "Unix","Windows", "Unix","Windows", "Unix","Windows", "Unix","Windows", "Unix",]
  constructor() { }

  ngOnInit(): void {
  }

}
