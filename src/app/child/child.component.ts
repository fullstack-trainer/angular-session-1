import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() pdata = '';
  @Output() onDataReceive = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(val: string) {
    this.onDataReceive.emit(val);
  }

}
