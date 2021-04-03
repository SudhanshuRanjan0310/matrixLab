import { Component, OnInit } from '@angular/core';
import { restService } from 'src/app/services/spService';
import { faEye as faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  faEye = faEye;
  constructor(private restApi: restService) {}
  // public url: string;
  public employeedata: any[];
  public addemployee: boolean = false;
  public individualemployeedetail: boolean = false;
  public employees: boolean = true;
  public currentEmployee: any;
  public pageHeader: string = 'Employee Page';
  public pagenumber: number = 1;
  ngOnInit(): void {
    this.getDetails();
  }
  title = 'WorkForce';
  public getDetails() {
    this.restApi.getListItemsByUri(this.pagenumber).subscribe((listData) => {
      this.employeedata = listData['data'];
    });
  }

  public receiveData($event) {
    if ($event === 'addemployee') {
      this.AddEmployeeClick();
    } else if ($event === 'employee') {
      this.EmployeesClick();
    }
  }

  public AddEmployeeClick() {
    this.addemployee = true;
    this.employees = false;
    this.pageHeader = 'Add Employee Page';
    this.individualemployeedetail = false;
  }
  public EmployeesClick() {
    this.pageHeader = 'Employee Page';
    this.employees = true;
    this.addemployee = false;
    this.individualemployeedetail = false;
  }

  public IndividualEmployeeClick(employee) {
    this.pageHeader = 'Employee Details';
    this.individualemployeedetail = true;
    this.employees = false;
    this.addemployee = false;
    this.currentEmployee = employee;
    this.currentEmployee.id = employee.id;
    this.currentEmployee.first_name = employee.first_name;
    this.currentEmployee.last_name = employee.last_name;
    this.currentEmployee.email = employee.email;
  }

  public pagechange(pagenum) {
    this.pagenumber = pagenum;
    this.getDetails();
  }
}
