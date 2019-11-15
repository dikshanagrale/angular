import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps;

  constructor(public service:DataService) 
  { 
    this.getdata()
  }

  getdata(){
    let data=this.service.getData();
    data.subscribe((response)=>
    {
      this.emps=response;
      console.log(response);
    });
  
  }

  delete(no)
  {

   this.service.deleteData(no).subscribe((res)=>{
      this.getdata();
    })
  }

  ngOnInit() {
  }

}
