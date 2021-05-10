import { Injectable } from '@angular/core';
import { BlogDetail } from './blog-detail.model';
import { HttpClient } from "@angular/common/http" //& HTTP Client Connection
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class BlogDetailsService {

  constructor(private http: HttpClient) { }

  formData : BlogDetail = new BlogDetail() //& Because of property binding, form entries are stored inside formData

  list !: BlogDetail[]; //% Storage for all Blog Articles

  readonly baseURL = "https://localhost:44398/api/BlogsAPI" //& localhost site
  postBlogArticle(){
    console.log(this.formData);
    return this.http.post(this.baseURL, this.formData) //& sends request to URL with Data and get response
  }

  //% method to retrieve all data in DB, Get Request
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then( res  => this.list = res as BlogDetail[])
  }
}


// https://localhost:44398/