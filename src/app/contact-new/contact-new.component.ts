import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {
  userInfo:{name:String,email:string,phone:number} ={name:'',email:'',phone:null};
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  add(){
        
        console.log(this.userInfo)

        this.http.post("http://localhost:3000/contacts",this.userInfo).toPromise()
         .then( 
           //成功，路由到列表页
            (data) => this.router.navigate(['/contact'])
         )
         .catch( err => console.log(err))

  }
}
