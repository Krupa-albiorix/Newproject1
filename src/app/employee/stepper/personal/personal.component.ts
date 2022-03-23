import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  @Input() personaldetails: any; 

  constructor() {}

  ngOnInit() {
  }
}
