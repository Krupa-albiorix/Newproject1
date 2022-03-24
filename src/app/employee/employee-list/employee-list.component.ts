import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  dataSource = [];

  displayedColumns: string[] = ['firstname', 'department', 'designation', 'email', 'mobilenumber', 'uploadresume', 'updatedata'];

  localStorage: any;
  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = localStorage.getItem('Users');
    this.dataSource = JSON.parse(localStorage.getItem('Users')!);
  }

}
