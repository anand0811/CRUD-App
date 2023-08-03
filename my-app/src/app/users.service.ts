import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get('http://localhost:3000/userData')
  }

  postData(data:any){
    return this.http.post('http://localhost:3000/userData/',data)
  }

  editData(data:any, id:any){
    return this.http.put('http://localhost:3000/userData/'+id,data)
  }

  deleteData(id:any){
    return this.http.delete('http://localhost:3000/userData/'+id)
  }

}
