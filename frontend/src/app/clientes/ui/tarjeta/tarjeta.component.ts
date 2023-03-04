import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() data:any;
  @Input() showClientes:boolean = false;

  public copiado:string = "";

  portapapeles($event:any, id:string){
    $event.stopPropagation();
    var aux = document.createElement("input");
    aux.setAttribute("value", id)
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    $event.target.innerHTML = "¡Copiado!"
    $event.target.style.background = "rgb(26, 204, 26)";
    setTimeout(() => {
      $event.target.innerHTML = "Copiar";
      $event.target.style.background = "gray";
    }, 2000);
  }

  constructor(){
    this.data = {
      _id:"1",
      tipo:"C",
      monto:510,
      clientes: [
        {
          _id:"4",
          nombre: "Will",
          apellido: "Med"
        }
      ]
    }
  }
}
