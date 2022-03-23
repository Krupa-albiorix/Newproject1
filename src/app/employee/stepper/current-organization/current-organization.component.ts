import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-organization',
  templateUrl: './current-organization.component.html',
  styleUrls: ['./current-organization.component.scss']
})
export class CurrentOrganizationComponent implements OnInit {

  @Input() current_organization_details : any;

  constructor() {}

  ngOnInit() {
  }

}
