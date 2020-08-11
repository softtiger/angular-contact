import { Component, OnInit } from '@angular/core';

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
  constructor() {
      
   }

  sigin(){
    console.log('here')
  }
  ngOnInit(): void {
  }

}
