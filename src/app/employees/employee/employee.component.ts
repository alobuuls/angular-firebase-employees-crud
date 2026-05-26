import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'

// Services
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public _employee: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ( form ) {
      form.resetForm();
    }

    this._employee.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: ''
    };
  }

  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;

    if ( form.value.id == null ) {
      this.firestore.collection('employees').add(data);
    }

    if ( form.value.id ) {
      this.firestore.doc(`employees/${form.value.id}`).update(data);
    }

    this.toastr.success('Submitted Successfully', 'Emp. Register');
    this.resetForm(form);
  }

}
