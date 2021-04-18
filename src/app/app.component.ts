import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoapp';
  counter = 0;
  toggleVal = 'Hide';
  showVal = true;
  charCount = 0;
  name = '123';

  incrCounter() {
    this.counter++;
  }

  onClickToggle() {
    this.showVal = !this.showVal;
    this.toggleVal = this.toggleVal === 'Show' ? 'Hide' : 'Show';
  }

  performCharCount(event: Event) {
    const val = (<HTMLInputElement> event.target).value;
    this.charCount = val.length;
  }


}
