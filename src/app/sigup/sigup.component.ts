import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  email_err_msg:string
  signupForm:{email:string,password:string} = { email:'',password:''}

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  sigup(){
     const formData = this.signupForm;
     console.log(formData)
     //处理服务端的响应，成功则进入主页面；失败则提示
     this.http.post("http://localhost:3000/users",formData).toPromise().then( (data:any)=>{
                  this.email_err_msg = "";
                  window.sessionStorage.setItem("token",data.token)
                  window.sessionStorage.setItem("user_info",JSON.stringify(data.user))
                   this.route.navigate(['/'])
            }

           )
            .catch(err => {if (err.status==409) this.email_err_msg ="邮箱已注册"});
  }

}
