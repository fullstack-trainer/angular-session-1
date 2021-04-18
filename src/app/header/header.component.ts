import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  constructor() { }//once

  ngOnChanges() {

  }

  ngOnInit(): void {//once
  }

  ngOnDestroy(){

  }

}
