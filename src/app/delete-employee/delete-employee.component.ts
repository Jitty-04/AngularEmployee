import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {

  code=""

  readValues=()=>
  {
    let data:any={"code":this.code}
    console.log(data)
  }

}
