import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-organization',
  templateUrl: './current-organization.component.html',
  styleUrls: ['./current-organization.component.scss']
})
export class CurrentOrganizationComponent implements OnInit {

  @Input() current_organization_details : any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
