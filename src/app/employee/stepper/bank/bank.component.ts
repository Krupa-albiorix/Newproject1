import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  
  bankdetails!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.bankdetails = this._formBuilder.group({
      bankname: ['', Validators.required],
      accountname: ['', Validators.required],
      banknumber: ['', Validators.required],
      IFSCcode: ['', Validators.required],
      aadharnumber: ['', Validators.required],
      pannumber: ['', Validators.required]
    });
  }
}
