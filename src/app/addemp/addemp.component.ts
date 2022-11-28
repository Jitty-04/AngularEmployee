import { Component } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  Name=""
  Designation=""
  Salary=""
  Company=""
  Email=""

  readValues=()=>
  {
    let data:any=    {
      "Name":this.Name,
      "Designation":this.Designation,
      "Salary":this.Salary,
      "Company":this.Company,
      "Email":this.Email
    }
    console.log(data)
  }
}
