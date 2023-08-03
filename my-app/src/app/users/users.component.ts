import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  UserData:any;

  @ViewChild('Form') data:any;

  currentId:any;

  editMode:boolean = false;

  constructor(private ser:UsersService){}

  ngOnInit(): void {
    this.ser.getAllData().subscribe((response)=>{
      console.log(response);
      this.UserData = response;
    })
  }

  onSubmit(data:any){
    if(!this.editMode){
      this.ser.postData(data.value).subscribe((response)=>{
        console.log(response);   
      })
    }
    else{
      this.ser.editData(data.value,this.currentId).subscribe((response)=>{
        console.log(response);    
      })
    }
  }

  onEdit(id:any){
    this.currentId = id;

    const Cuser = this.UserData.find((m:any)=>{return m.id === id})
    console.log(Cuser);

    this.data.setValue({
      name:Cuser.name,
      age:Cuser.age,
      email:Cuser.email
    })
    
    this.editMode = true;
  }

  onDelete(id:any){
    this.ser.deleteData(id).subscribe((response)=>{
      console.log(response);
      
    })
  }

}
