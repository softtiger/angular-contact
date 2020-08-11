import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  signupForm:{email:string,password:string} = { email:'',password:''}

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  sigup(){
     const formData = this.signupForm;
     console.log(formData)
     this.http.post("http://localhost:3000/users",formData).toPromise().then(data => console.log(data));
  }

}
