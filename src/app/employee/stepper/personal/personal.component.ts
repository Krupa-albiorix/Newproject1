import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  personaldetails!: FormGroup;
  checked = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personaldetails = this._formBuilder.group({
      firstname: ['', Validators.required],
      middlename: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      contactnumber: ['', Validators.required],
      date: ['', Validators.required],
      uploadimg: ['', Validators.required],
      presentaddress: ['', Validators.required],
      permanentaddress: ['', Validators.required]
    });
  }
}
