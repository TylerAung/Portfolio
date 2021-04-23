import { Component,ViewChild,ElementRef, OnInit, Renderer2 } from '@angular/core';
import { BlogDetail } from 'src/shared/blog-detail.model';
import { BlogDetailsService } from 'src/shared/blog-detail.service';

@Component({
    selector: 'app-blogs',
    templateUrl: './app.blogs.html',
    styleUrls: ['./app.blogs.css']
  })
  export class BlogsComponent implements OnInit{

    //! Submit SMTP Form
    //% https://www.youtube.com/watch?v=xrm_yj0Rxgk

    constructor(public articles: BlogDetailsService){

    }
    ngOnInit(){
      this.articles.refreshList(); //% Calls get method, retrieve repository of articles
    }

    // https://www.youtube.com/watch?v=S5dzfuh3t8U
    // 1:33:24

    populateForm(selectedBlog: BlogDetail){
      this.articles.formData = selectedBlog
    }
  }
