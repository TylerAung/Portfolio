import { Component,ViewChild,ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogDetail } from 'src/shared/blog-detail.model';
import { BlogDetailsService } from 'src/shared/blog-detail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-blogsCreate',
    templateUrl: './BlogsCreate.Component.html',
    styleUrls: ['./BlogsCreate.component.css']
  })
  export class BlogsCreateComponent implements OnInit{

    constructor(public details : BlogDetailsService, private toastr:ToastrService){

    }
    ngOnInit(){

    }

    onSubmit(form:NgForm){
      console.log("This is print form: ",form)
      this.details.postBlogArticle().subscribe(
        res => {
          this.resetForm(form); //% resets form on successful submission
          this.toastr.success("Submitted Successfully", "Blog Article")
        },
        err => {
          console.log(err)
        }
      )
    }

    //% Clears Form on Submission
    resetForm(form:NgForm){
      form.form.reset();
      this.details.formData = new BlogDetail();
    }

    //& Paused at 1:19:43, error with submiting req from Angular to ASP NET

    //& Continued to 1:21:29, form notification
  }
