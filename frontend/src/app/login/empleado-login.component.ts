import { Component, OnInit } from '@angular/core';
import { EmpleadoB } from '../models/empleado';


@Component({
  selector: 'app-empleado-login',
  templateUrl: './empleado-login.component.html',
  styleUrls: ['./empleado-login.component.css']
})
export class EmpleadoLoginComponent implements OnInit {
  public empl: EmpleadoB;

  constructor() {
    this.empl = new EmpleadoB('', '', '')
  }
  ngOnInit(): void {

  }
}
