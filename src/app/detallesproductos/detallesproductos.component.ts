import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-detallesproductos',
  templateUrl: './detallesproductos.component.html',
  styleUrls: ['./detallesproductos.component.css']

})
export class DetallesproductosComponent implements OnInit {
  @Input() post: any = null;
  
  constructor() { }
 
  ngOnInit(): void {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  Eliminar(){
    console.log("se ha inicializado la funcion eliminar")
  document.getElementById("basicContent").style.backgroundColor="red";
  
  }
  Guardar(){
    console.log("se ha inicializado la funcion Guardar")
  document.getElementById("basicContent").style.backgroundColor="Green";
  
  }


}
