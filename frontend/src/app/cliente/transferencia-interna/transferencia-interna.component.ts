import { Component, Input } from '@angular/core';
import { TransferenciaI } from '../../models/transferenciaI';
import axios from 'axios';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transferencia-interna',
  templateUrl: './transferencia-interna.component.html',
  styleUrls: ['./transferencia-interna.component.css']
})
export class TransferenciaInternaComponent {
  @Input() id: string = "a";
  public ti: TransferenciaI;
  public otrasCuentas:any;
  opcion:number =1;
  public error:string = "";
  public success:string = "";

  constructor(
    private _router:Router
  ) {
    this.ti = new TransferenciaI('', '', '', '')

  }
  ngOnInit(): void {

  }

  onSubmit(formTransfI: NgForm) {    
    
    axios.post(`http://localhost:8080/api/cliente/cuentas/${this.id}/transferir/interno`, {
      monto: formTransfI.value.monto,
      cuentaDestino: formTransfI.value.destino
    },{
      headers: {
        Accept: 'application/json',
      },
      withCredentials: true
    }).then(resp => {
      this.error = "";
      this.success = "Transferencia realizada"      
    }).catch(err => {
      this.error = err.response.data;
      this.success = ""      
    })
    
    // console.log(formTransfI.value);  // { first: '', last: '' }
    // console.log(formTransfI.valid);  // false
  }
}
