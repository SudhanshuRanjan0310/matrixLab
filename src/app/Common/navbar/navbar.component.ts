import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data: string = '';
  @Output() dataEvent = new EventEmitter<string>();
  constructor() {}
  public individualemployeedetail: boolean = false;
  public addemployee: boolean = false;
  public employees: boolean = true;
  ngOnInit(): void {}

  public emitData(type) {
    this.data = type;
    this.dataEvent.emit(this.data);
  }
}
