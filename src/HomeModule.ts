import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { RouterModule } from '@angular/router';
//import { CustomerRoutes } from './CustomerApp/CustomerApp.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { MainModule } from 'src/MainComponent/app.module';
import { TemplateComponent } from 'Template';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



//% Step 6) Copy NgModule & Fix Imports
@NgModule({
    declarations: [
      TemplateComponent
      //& Step 7) Include the login & template component

    ],
    imports: [
        //MainModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      //RouterModule.forRoot(CustomerRoutes)//@ Routing module that make routing file opertable throughout project
      //RouterModule.forRoot(HomeRoutes, {useHash: true}),
      BrowserAnimationsModule, //% Step 13) Home module will load Home routes
    ],

    providers: [],//@ provide, whenever there's http call, use JwtInterceptor
              bootstrap: [TemplateComponent] //% Step 8) For Lazy Loading
    // bootstrap: [TemplateComponent]//@ Defines which component loads first
  })


  //% Step 5 Add HomeModule
export class HomeModule {

}
