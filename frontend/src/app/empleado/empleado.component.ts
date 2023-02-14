import { Component, OnInit, Output  } from '@angular/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  option:number =0;


 activarComponente(@Output() opcion:number ){
   this.option = opcion;
 }


  constructor() { 
  }

  ngOnInit(): void {
  }

}