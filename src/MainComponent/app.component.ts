import { Component,ViewChild,ElementRef, OnInit, Renderer2 } from '@angular/core';
import ParticleData from './particles.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit{
  title = 'PortfolioAngular';
  @ViewChild('shuffle', {static: true}) ShufContainer !:ElementRef;
  @ViewChild('mainParticle', {static: true}) mainParticle !:ElementRef;

  textToWrite = `I digitalize ideas 
        I command computers to my will 
        I make websites visible on Search`;
  index = 0;
  progress = 0;
  codingChars = "!1AB@2_CD#3E-F$4GH%5IJ6KL7&MN8OP9QR0STUVWXYZ";

  particlesUrl: any = JSON;
  id = "tsparticles";

  constructor(private renderer: Renderer2){
    this.particlesUrl = ParticleData.particlesOptions;
    this.animate();
  }

  ngOnInit(): void {
    this.index = 0;
    this.progress = 0;
    this.animate();
    // console.log(this.renderer.selectRootElement(this.mainParticle.nativeElement));
  }

//   particlesJS.load('particles-js', '/vendors/particles.js-master/particles.json', function() {
//     console.log('callback - particles.js config loaded');
//     let el = document.querySelector(".particles-js-canvas-el"); 
//     el.setAttribute("height", "300px");
// });

  
    particlesLoaded(container: any): void { 
      //console.log(container.canvas.element)
      //console.log(container.canvas.originalStyle);
      console.log(container);
      //container.canvas.originalStyle.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

      //console.log(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));
      //container.canvas.size.height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      //container.canvas.size.width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      //container.canvas.size.height = window.innerHeight;
      }

    
    particlesInit(main: any): void {    
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        //console.log(main)
    }

    textCounter:number = 0;

    public getRandomChars(howMany: number) {
      let result = '';
      let codingChars = '!1AB@2_CD#3E-F$4GH%5IJ6KL7&MN8OP9QR0STUVWXYZ';
      for(let i=0; i<howMany; i++) {
          if(i % 5 == 0) {
          result += ' '
          } else {
          result += codingChars.charAt(Math.floor(Math.random() * codingChars.length));
          }
      }
      return result
      }

      public animate() {
        setTimeout(() => {
          this.textCounter++;
          let currentText = this.textToWrite.substr(0, this.textCounter);
          currentText += this.getRandomChars(
            this.textToWrite.length - this.textCounter
          );
    
          this.ShufContainer.nativeElement.innerHTML = currentText;
          this.progress = this.textCounter / this.textToWrite.length;
    
          if (this.progress < 1) {
            this.animate();
          }
        }, 100);
      }
   
}

