import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute}  from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  userInfo:{name:String,email:string,phone:number,id:number,userId:number} ={name:'',email:'',phone:null,id:null,userId:null};
  constructor(private router:Router,private activeRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
        const id = this.activeRoute.snapshot.params.id
        this.http.get("http://localhost:3000/contacts/"+id).toPromise()
                .then( (data:any) => this.userInfo = data)
                .catch( err => console.log(err))
  }

  saveData(){
       this.http.patch(`http://localhost:3000/contacts/${this.userInfo.id}`,this.userInfo).toPromise()
              .then( data =>this.router.navigate(["/contact"]))
              .catch( err => console.log(err))
  }
}
