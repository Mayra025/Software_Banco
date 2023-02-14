import { Component } from '@angular/core';
import { TransferenciaI } from '../models/transferenciaI';

@Component({
  selector: 'app-transferencia-interna',
  templateUrl: './transferencia-interna.component.html',
  styleUrls: ['./transferencia-interna.component.css']
})
export class TransferenciaInternaComponent {
  public ti: TransferenciaI;
  opcion:number =1;


  constructor() {
    this.ti = new TransferenciaI('', '', '', '')
  }
  ngOnInit(): void {

  }
}
