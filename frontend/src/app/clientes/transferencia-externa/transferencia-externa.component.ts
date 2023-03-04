import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TransferenciaI } from '../../models/transferenciaI';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../services/cliente.services';
import { TransferenciaE } from 'src/app/models/transferenciasE';

@Component({
  selector: 'app-transferencia-externa',
  templateUrl: './transferencia-externa.component.html',
  styleUrls: ['./transferencia-externa.component.css']
})
export class TransferenciaExternaComponent {
  @Output() activarComponente = new EventEmitter<number>();
  @Input() id: string = "a";
  @Input() objR: string;
  @Input() cuenta:any;
  public ti: TransferenciaE;
  public otrasCuentas:any;
  opcion:number =1;
  public error:string = "";
  public success:string = "";
  public bancos:any

  setOption(option:number){
    this.activarComponente.emit(option)
  }

  constructor(
    private _router:Router,
    private _ClienteService:ClienteService
  ) {
    this.ti = new TransferenciaE('', '', '', '', '')

    this._ClienteService.getBancos().subscribe(resp=>{
      this.bancos = resp.data
    }, err=>{
      this._router.navigate(['/login']);
    })
  }
  ngOnInit(): void {    
  }

  onSubmit(formTransfI: NgForm) {    
    if (!this.cuenta) {
      alert("Primero debe seleccionar una cuenta")
      this.setOption(1)
    }else{
      this._ClienteService.transferToCuentaExt({
        monto: formTransfI.value.monto,
        cuentaDestino: formTransfI.value.destino,
        banco: formTransfI.value.banco,
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
