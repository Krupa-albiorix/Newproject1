import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experiencedetails: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addExp()
  }

  get details() {
    return this.experiencedetails.controls["details"] as FormArray;
  }

  addExp() {
    this.details.push(this._formBuilder.group({
      company_name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      total_year: ['', [Validators.required]],
      last_ctc: ['', [Validators.required]],
      delete: ['']
    }))
  }

  deleteDetail(detailIndex: number) {
    this.details.removeAt(detailIndex);
  }

}
