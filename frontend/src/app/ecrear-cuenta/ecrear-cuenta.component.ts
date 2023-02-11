import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../models/cuenta';

@Component({
  selector: 'app-ecrear-cuenta',
  templateUrl: './ecrear-cuenta.component.html',
  styleUrls: ['./ecrear-cuenta.component.css']
})
export class EcrearCuentaComponent implements OnInit {
  public cta: CuentaB;
  constructor() {
    this.cta = new CuentaB('', '')
  }
  ngOnInit(): void {

  }
}
