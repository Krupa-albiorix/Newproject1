import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  personaldetails! : FormGroup;
  bankdetails! : FormGroup;
  professionaldetails!: FormGroup;
  educationdetails!: FormGroup;
  experiencedetails!: FormGroup;
  current_organization_details!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
