import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService,private route:Router){}
  empcode=""
  searchEmployee:any=[]
  readValues=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid employee code")
        }
        else{
          this.searchEmployee=response;

        }
        
          
      }
    )
  
  
  }
  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
        alert("Employee deleted successfully")
        this.route.navigate(["search"])
        }
        else{
          alert("employee doesn't exist")

        }
      }
    )
  }
  }


