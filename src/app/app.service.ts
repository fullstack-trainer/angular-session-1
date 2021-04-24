import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private name = '';

  getWelcomeString(): string {
    return "Hello " + this.name;
  }

  setName(n: string): void {
    this.name = n;
  }

}
