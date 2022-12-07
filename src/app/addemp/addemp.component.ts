import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

empcode=""
  empname=""
  designation=""
  salary=""
  companyname=""
  mbno=""
  username=""
  password=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any=   
     {
      "empcode":this.empcode,
      "empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "companyname":this.companyname,
      "mbno":this.mbno,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Employee added successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.mbno=""
          this.username=""
          this.password=""
        
          
        } else {
          alert("something went wrong")
        }
      }
    )
  
  
  }
  }

