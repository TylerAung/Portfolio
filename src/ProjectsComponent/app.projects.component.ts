import { Component,ViewChild,ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './app.projects.html',
    styleUrls: ['./app.projects.css']
  })
  export class ProjectsComponent implements OnInit{
    // HEROES: Hero[] = [
    //   { id: 11, name: 'Dr Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
    articles = [
      { title: "IMBA PC", cover: "../assets/img/IMBACover.JPG",content: "This will come from rich text editors" , html: true,css: true, js: true },
      { title: "Edna The Designer", cover: "../assets/img/EdnaCover.JPG",content: "This will come from rich text editors" , html: true,css: true, js: true },
      { title: "IntoE", cover: "../assets/img/IntoECover.JPG",content: "This will come from rich text editors" , html: true,css: true, js: true  },
    ];

    // <img src="/assets/img/popo.png">
    constructor(){

    }
    ngOnInit(){

    }

    PopUp(){
        console.log(this);
    }
  }
