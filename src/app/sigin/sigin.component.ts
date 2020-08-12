import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  err_msg:String
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
                        window.sessionStorage.setItem("token",data.token)
                        window.sessionStorage.setItem("user_info",JSON.stringify(data.user))
                        this.err_msg =""
                        this.router.navigate(['/'])
                      }
              )
        .catch((err) => { if (err.status==401 || err.status==422)
            this.err_msg ="邮箱或密码不正确"
        })
  }
  ngOnInit(): void {
  }

}
