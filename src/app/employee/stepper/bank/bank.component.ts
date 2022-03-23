import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  @Input() bankdetails: any;

  constructor() {}

  ngOnInit() {
    console.log(this.bankdetails);
    
  }
}
