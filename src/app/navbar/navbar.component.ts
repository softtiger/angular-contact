import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo

  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit(): void {

      this.userInfo = JSON.parse(window.sessionStorage.getItem("user_info") || '{}')
      console.log(this.userInfo)
  }

  sigout(){
       this.http.delete("http://localhost:3000/session").toPromise().then(
         (data) => { 
             window.sessionStorage.clear()
             this.route.navigate(["/sigin"])
         }
       ).catch((err) => window.alert("退出失败"))
  }
}
