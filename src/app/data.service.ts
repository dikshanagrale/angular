import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) {}

  getData()
  {

    return this.http.get("http://13.233.137.11:2000/employees");

   }
   deleteData(no)
   {
    return this.http.delete("http://13.233.137.11:2000/employees/"+no);
   }
}
