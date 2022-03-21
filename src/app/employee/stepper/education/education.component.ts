import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
 
  @Input() educationdetails : any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addDetail();
  }

  get details() {
    return this.educationdetails.controls["details"] as FormArray;
  }

  addDetail() {
    this.details.push(this._formBuilder.group({
      education_name: ['', [Validators.required]],
      university_name: ['', [Validators.required]],
      result: ['', [Validators.required]],
      passing_year: ['', [Validators.required]],
      delete: ['']
    }))
  }

  deleteDetail(detailIndex: number) {
    this.details.removeAt(detailIndex);
  }

}
