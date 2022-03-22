import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() stepperName : any;

  @Output() newItemEvent = new EventEmitter<string>();

  onSubmit () {
    this.newItemEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }


}
