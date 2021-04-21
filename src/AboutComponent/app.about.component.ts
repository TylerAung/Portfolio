import { Component,ViewChild,ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './app.about.html',
    styleUrls: ['./app.about.css']
  })
  export class AboutComponent implements OnInit{
    test : string = "<h1>I AM H1</h1>"
    constructor(){

    }
    ngOnInit(){

    }
  }
