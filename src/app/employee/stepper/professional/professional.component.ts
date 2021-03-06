import { Component, Input, OnInit } from '@angular/core';

interface Year {
  value: number;
  viewValue: string;
}
interface Month {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {

  @Input() professionaldetails : any;

  constructor() {}

  ngOnInit() {
    
  }

  updateresume(event: any) {
    this.professionaldetails.controls['uploadresume'].setValue(event.target.files[0].name);
  }

  years: Year[] = [
    {value: 1, viewValue: '0 Years'},
    {value: 2, viewValue: '1 Years'},
    {value: 3, viewValue: '2 Years'},
    {value: 4, viewValue: '3 Years'},
    {value: 5, viewValue: '4 Years'},
    {value: 6, viewValue: '5 Years'},
    {value: 7, viewValue: '6 Years'},
    {value: 8, viewValue: '7 Years'},
    {value: 9, viewValue: '8 Years'},
    {value: 10, viewValue: '9 Years'},
    {value: 11, viewValue: '10 Years'},
  ];
  selectedYear = this.years[0].value;
  
  months: Month[] = [
    {value: 1, viewValue: '1 Month'},
    {value: 2, viewValue: '2 Month'},
    {value: 3, viewValue: '3 Month'},
    {value: 4, viewValue: '4 Month'},
    {value: 5, viewValue: '5 Month'},
    {value: 6, viewValue: '6 Month'},
    {value: 7, viewValue: '7 Month'},
    {value: 8, viewValue: '8 Month'},
    {value: 9, viewValue: '9 Month'},
    {value: 10, viewValue: '10 Month'},
    {value: 11, viewValue: '11 Month'},
    {value: 12, viewValue: '12 Month'}
  ];
}
