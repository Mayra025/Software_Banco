import { Component, Input, Output , EventEmitter} from '@angular/core';
import { TransferenciaI } from '../../models/transferenciaI';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../services/cliente.services';

@Component({
  selector: 'app-transferencia-interna',
  templateUrl: './transferencia-interna.component.html',
  styleUrls: ['./transferencia-interna.component.css']
})
export class TransferenciaInternaComponent {
  @Output() activarComponente = new EventEmitter<number>();
  @Input() id: string = "a";
  @Input() objR: string;
  @Input() cuenta:any;
  public ti: TransferenciaI;
  public otrasCuentas:any;
  opcion:number =1;
  public error:string = "";
  public success:string = "";

  setOption(option:number){
    this.activarComponente.emit(option)
  }

  constructor(
    private _router:Router,
    private _ClienteService:ClienteService
  ) {
    this.ti = new TransferenciaI('', '', '', '')

  }
  ngOnInit(): void {    
  }

  onSubmit(formTransfI: NgForm) {    
    if (!this.cuenta) {
      alert("Primero debe seleccionar una cuenta")
      this.setOption(1)
    }else{
      this._ClienteService.transferToCuentaInt({
        monto: formTransfI.value.monto,
        cuentaDestino: formTransfI.value.destino
      }, this.cuenta._id).subscribe(resp=>{
        this.error = "";
        this.success = "Transferencia realizada"      
      }, err=>{
        this.error = err.error.message;
        this.success = ""      
      })
    }
  }
}
