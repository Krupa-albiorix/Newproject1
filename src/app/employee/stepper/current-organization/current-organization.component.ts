import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-organization',
  templateUrl: './current-organization.component.html',
  styleUrls: ['./current-organization.component.scss']
})
export class CurrentOrganizationComponent implements OnInit {

  current_organization_details!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.current_organization_details = this._formBuilder.group({
      joining_date: ['', Validators.required],
      next_appraisal: ['', Validators.required],
      current_ctc: ['', Validators.required]
    });
  }

}
