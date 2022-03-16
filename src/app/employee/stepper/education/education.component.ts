import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 
  educationdetails!: FormGroup;
  detailForm! : FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.educationdetails = this._formBuilder.group({
      details: this._formBuilder.array([])
    });
  }

  get details() {
    return this.educationdetails.controls["details"] as FormArray;
  }

  addDetail() {
    this.detailForm = this._formBuilder.group({
      education_name: ['', Validators.required],
      university_name: ['', Validators.required],
      result: ['', Validators.required],
      passing_year: ['', Validators.required],
      delete: ['']
    });
    this.details.push(this.detailForm);
  }

  deleteDetail(detailIndex: number) {
    this.details.removeAt(detailIndex);
  }

}
