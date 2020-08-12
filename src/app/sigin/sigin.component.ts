import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  //这里必须先初始化，如果是个空对象，会报错
  loginform:{
     email:String
     password:String
  } = {
     email:'',
     password:''
  }
  constructor(private http:HttpClient,private router:Router) {
      
   }

  sigin(){
    const formData = this.loginform;
    this.http.post("http://localhost:3000/session",formData).toPromise()
        .then((data:any) =>{ 
                        window.localStorage.setItem("token",data.token)
                        this.router.navigate(['/'])
                      }
              )
        .catch((err) => console.log(err))
  }
  ngOnInit(): void {
  }

}
