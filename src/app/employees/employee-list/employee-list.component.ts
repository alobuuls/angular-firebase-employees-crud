import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  list!: Employee[];
  constructor(
    private _employe: EmployeeService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this._employe.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        const data = item.payload.doc.data() as Employee;
        return {
          ...data,
          id: item.payload.doc.id
        };
      });
    });
  }

  onEdit(emp: Employee) {
    this._employe.formData = Object.assign({}, emp);
  }

  onDelete(emp: Employee) {
    if (confirm('Are you sure to delete this record?') ) {
      this._employe.removeEmployee(emp.id as string);
      this.toastr.warning(`The emp (${emp.fullName.trim()}) has been deleted`);
    }
  }
}
