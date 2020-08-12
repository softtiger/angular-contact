import { Component, OnInit } from '@angular/core';
import { HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
        this.http.get("http://localhost:3000/contacts").toPromise()
          .then((data:any)=>{
              console.log(data)
          })
          .catch((err) =>{
              console.log(err)
          })
  }

}
