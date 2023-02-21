import { Component, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  option:number =0;


  activarComponente(@Output() opcion:number ){
    this.option = opcion;
  }
 
   constructor() { 
   }
 
   ngOnInit(): void {
   }
  
}
