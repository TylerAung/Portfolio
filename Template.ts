import { Component,OnInit, } from '@angular/core';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './Template.html'
})
export class TemplateComponent implements OnInit{

    constructor(){

    }

    public ngOnInit(){

    }

//     // !Scroll to Top
// // Indentify Arrow and trigger Jump to top event
//   document.querySelector("#scrollTop").addEventListener("click", ()=>{
  
//   })

//   RunScroll(){
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     })
//   };
// // Makes arrow visible after scrolling 500px
// // Can use for whatsapp btn or fb or other CTA Events
//   window.addEventListener("scroll", function(){
//     let scroll = document.querySelector("#scrollTop");
//     scroll.classList.toggle("TopActive", window.scrollY > 500);
//   }
}