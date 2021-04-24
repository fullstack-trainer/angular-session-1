import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  title = 'demoapp';
  counter = 0;
  toggleVal = 'Hide';
  showVal = true;
  charCount = 0;
  name = '123';
  data1 = "Hello from parent";
  fromChild = ''

  incrCounter() {
    this.counter++;
  }

  onClickToggle() {
    this.showVal = !this.showVal;
    this.toggleVal = this.toggleVal === 'Show' ? 'Hide' : 'Show';
  }

  performCharCount(event: Event) {
    const val = (<HTMLInputElement>event.target).value;
    this.charCount = val.length;
  }

  onDataReceived(data: any) {
    this.fromChild = data;
  }

  constructor(private appService: AppService) { }

  ngOnInit(){
    this.appService.setName('Angular');
  }


}
