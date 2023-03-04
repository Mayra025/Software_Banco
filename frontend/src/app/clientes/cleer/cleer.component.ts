import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.services';
@Component({
  selector: 'app-cleer',
  templateUrl: './cleer.component.html',
  styleUrls: ['./cleer.component.css'],
  providers: [ClienteService]

})
export class CleerComponent implements OnInit {
  title = "Leer";
  @Input() objR: string;
  @Input() cuenta:any;
  @Input() recuperarCuenta: () => void;
  @Input() a:string;
  @Output() setCuenta = new EventEmitter<any>();
  @Output() activarComponente  = new EventEmitter<number>();
  public cuentas:any

  setCuentaInt(cuenta:any) {
    this.setCuenta.emit(cuenta);
  }

  setOption(option:number){
    this.activarComponente.emit(option)
  }

  constructor(
    private _ClienteService:ClienteService,
    private _router: Router, 
  ){
    this._ClienteService.getMisCuentas().subscribe(resp=>{
      this.cuentas = resp.data;
    },err=>{
      this._router.navigate(['/login']);
    })
  }

  

  ngOnInit(): void {
    this._ClienteService.getMiCuenta(this.cuenta._id).subscribe(resp=>{
      this.cuenta = resp.data
    }, err => {
      console.log(err.error.message);
    })
  }
  
  getCuenta($event, cuenta:any){
    this._ClienteService.getMiCuenta(cuenta._id).subscribe(resp=>{
      this.cuenta = resp.data
      this.setCuentaInt(resp.data) 
    }, err => {
      console.log(err.error.message);
    })   
  }

  deleteCuenta(){
    this.cuenta = null;
    this.setCuenta.emit(null);
  }
}
