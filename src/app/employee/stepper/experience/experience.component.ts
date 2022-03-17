import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiencedetails!: FormGroup;
  detailForm! : FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.experiencedetails = this._formBuilder.group({
      details: this._formBuilder.array([])
    });
  }

  get details() {
    return this.experiencedetails.controls["details"] as FormArray;
  }

  addDetail() {
    this.detailForm = this._formBuilder.group({
      company_name: ['', Validators.required],
      position: ['', Validators.required],
      total_year: ['', Validators.required],
      last_ctc: ['', Validators.required],
      delete: ['']
    });
    this.details.push(this.detailForm);
  }

  deleteDetail(detailIndex: number) {
    this.details.removeAt(detailIndex);
  }

}
