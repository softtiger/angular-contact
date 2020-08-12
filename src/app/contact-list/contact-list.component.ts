import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:[]
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
      this.reload() 
  }

  delete(id:number,event:Event){
       //阻止默认跳转
       event.preventDefault()
       console.log(id)
       this.http.delete("http://localhost:3000/contacts/"+id).toPromise()
        .then(data => this.reload())
        .catch( err => console.log(err))
  }

  reload(){
    this.http.get("http://localhost:3000/contacts").toPromise()
    .then((data:any)=>{
          this.contacts = data;
          console.log(this.contacts)
    })
    .catch((err) =>{
        console.log(err)
    })
  }
}
