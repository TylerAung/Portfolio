import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './app.component';
import { NgParticlesModule } from 'ng-particles';
import { TemplateComponent } from 'Template';
import { RouterModule } from '@angular/router';
import { HomeRoutes} from 'MainRoutes';
import { ScrollTopComponent } from './scroll-top/scroll-top.component'
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { TidbitsComponent } from './tidbits/tidbits.component';
import {AboutComponent} from "../AboutComponent/app.about.component"
import {LoginComponent} from "../LoginComponent/app.login.component"
import {ProjectsComponent} from "../ProjectsComponent/app.projects.component"
import {MainRoutes} from "../Routing/Portfolio.MainRouting"
import {BlogsComponent} from "../BlogsComponent/app.blogs.component"
import {BlogsCreateComponent} from "../BlogsComponent/BlogCreate/BlogsCreate.component"
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MainComponent,
    TemplateComponent,
    ScrollTopComponent,
    ServicesComponent,
    TidbitsComponent,
    AboutComponent,
    LoginComponent,
    ProjectsComponent,
    BlogsComponent,
    BlogsCreateComponent
  ],
  imports: [
    BrowserModule,
    NgParticlesModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    //RouterModule.forRoot(HomeRoutes, {useHash: true})
    RouterModule.forRoot(MainRoutes ,{useHash: true, scrollPositionRestoration: 'enabled'})

  ],
  providers: [],
  bootstrap: [TemplateComponent]
})
export class AppModule { }
