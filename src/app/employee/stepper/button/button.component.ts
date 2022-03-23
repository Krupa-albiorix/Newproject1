import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() stepperName : any;

  @Output() public eventEmitter = new EventEmitter<string>();

  onSubmit() {
    this.eventEmitter.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }


}
