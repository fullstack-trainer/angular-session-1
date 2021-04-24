import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Password } from '../password';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() pdata = '';
  @Output() onDataReceive = new EventEmitter<string>();

  passObj:Password = { upperCase: false, lowerCase: false, char: 0 };

  constructor(private appService:AppService) { }

  ngOnInit(): void {
    console.log("ChildComponent....", this.appService.getWelcomeString());
  }

  sendToParent(event: any) {
    this.onDataReceive.emit(event.target.value);
  }

}
