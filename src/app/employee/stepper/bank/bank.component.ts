import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  @Input() bankdetails: any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log(this.bankdetails);
    
  }
}
